import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Canvas from '../components/Canvas';
import DropMenu from '../components/DropMenu';
import Button from '../components/Button';
import DialogModal from '../components/DialogModal';
import RulesModal from '../components/RulesModal';
import EndGameModal from '../components/EndGameModal';
import CharacterIcons from '../components/CharacterIcons';

function GameBoard() {
  const { state } = useLocation();
  const [clickPosition, setClickPostion] = useState({});
  const [target, setTarget] = useState({});
  const [showMenu, setShowMenu] = useState('none');
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const [character, setCharacter] = useState({});
  const [verify, setVerify] = useState(false);
  const [charactersFound, setCharactersFound] = useState([]);
  const [endGameStats, setEndGameStats] = useState({});
  const [leaderList, setLeaderList] = useState([]);
  const [isHighScore, setIsHighScore] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    imageId: state.imageId,
  });

  useEffect(() => {
    if (!verify) {
      return;
    }
    async function checkCoordinates() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/check_selection`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              characterId: character.characterId,
              xCoord: character.xCoord,
              yCoord: character.yCoord,
              imageId: state.imageId,
            }),
          },
        );

        const responseData = await response.json();
        if (responseData.input !== undefined) {
          setCharactersFound([...charactersFound, responseData.input]);
        }

        if (responseData.isGameOver === true) {
          if (showEndGameModal === false) {
            setShowEndGameModal(true);
          } else {
            setShowEndGameModal(false);
          }
          setEndGameStats(responseData.elapsed_time);
          setNewUser({...newUser,
            minutes: responseData.elapsed_time.minutes,
            seconds: responseData.elapsed_time.seconds,
          });
        }
      } catch (error) {
        console.error(error.status);
      }
    }
    checkCoordinates();

    setVerify(false);
  }, [verify, character, charactersFound, showEndGameModal, state.imageId, newUser]);

  useEffect(() => {
    if (showEndGameModal === false) {
      return;
    }
    function checkLeaderBoard() {
      if (leaderList.length <= 10) {
        setIsHighScore(true);
      }
    }
    checkLeaderBoard();
  }, [leaderList.length, showEndGameModal]);

  // quitGame function is when user ends game prior to completion
  async function quitGame() {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/quit_game`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
    } catch (error) {
      console.error(error);
    }
  }

  // endGame function is when the user completes the game by finding all characters
  async function endGame() {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/quit_game`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: {
          username: newUser.username,
          imageId: newUser.imageId,
          minutes: newUser.minutes,
          seconds: newUser.seconds,
        }
      });
    } catch (error) {
      console.error(error);
    }
    console.log('End Game function');
    console.log(newUser);
    console.log(endGameStats);
  }

  function toggleMenu() {
    if (showMenu === 'none') {
      setShowMenu('block');
    } else {
      setShowMenu('none');
      setClickPostion({});
      setTarget({});
    }
  }

  function toggleRulesModal() {
    if (showRulesModal === false) {
      setShowRulesModal(true);
    } else {
      setShowRulesModal(false);
    }
  }

  function toggleDialogModal() {
    if (showDialogModal === false) {
      setShowDialogModal(true);
    } else {
      setShowDialogModal(false);
    }
  }

  function handleChangeEndGameModal(e) {
    setNewUser({...newUser,
      username: e.target.value,
    });
  }

  return (
    <section className='relative grid h-full grid-rows-[10%_90%]'>
      <div className='flex items-center justify-between'>
        <CharacterIcons characterList={state.characters} />
        <p>{state.title}</p>
        <div className='flex gap-2'>
          <Button
            type={'button'}
            id={'rulesBtn'}
            text={'Rules'}
            className={
              'h-8 w-14 rounded-full bg-green-400 font-bold text-white shadow-md'
            }
            onClick={toggleRulesModal}
          />
          <Button
            type={'button'}
            id={'quitBtn'}
            text={'Quit'}
            className={
              'h-8 w-14 rounded-full bg-red-500 font-bold text-white shadow-md'
            }
            onClick={toggleDialogModal}
          />
        </div>
      </div>
      <Canvas
        imgSrc={state.image_location}
        width={state.width}
        height={state.height}
        clickPosition={clickPosition}
        setClickPosition={setClickPostion}
        target={target}
        setTarget={setTarget}
        setVerify={setVerify}
        toggleMenu={toggleMenu}
        charactersFound={charactersFound}
      />
      <DropMenu
        characters={state.characters}
        position={clickPosition}
        showMenu={showMenu}
        setCharacter={setCharacter}
        target={target}
        toggleMenu={toggleMenu}
        setVerify={setVerify}
      />
      <DialogModal
        message={'Are you sure you want to quit?'}
        showDialogModal={showDialogModal}
        toggleDialogModal={toggleDialogModal}
        onClick={quitGame}
      />
      <RulesModal
        linkTo={''}
        onClick={toggleRulesModal}
        isDisplaySet={showRulesModal}
        heightWidth={'h-full w-full'}
      />
      <EndGameModal
        showEndGameModal={showEndGameModal}
        endGameStats={endGameStats}
        imageId={state.imageId}
        isHighScore={isHighScore}
        handleClick={endGame}
        handleChange={handleChangeEndGameModal}
        setLeaderList={setLeaderList}
      />
    </section>
  );
}

export default GameBoard;

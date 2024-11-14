import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Canvas from '../components/Canvas';
import DropMenu from '../components/DropMenu';
import Button from '../components/Button';
import DialogModal from '../components/DialogModal';
import RulesModal from '../components/RulesModal';
import CharacterIcons from '../components/CharacterIcons';

function GameBoard() {
  const { state } = useLocation();
  const [clickPosition, setClickPostion] = useState({});
  const [target, setTarget] = useState({});
  const [showMenu, setShowMenu] = useState('none');
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [character, setCharacter] = useState({});
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    if (!verify) { return };
    
    
    console.log(verify);
    setVerify(false);
  }, [verify]);

  async function quitGame() {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/quit_game`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
    }
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

  console.log(character);
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
        toggleMenu={toggleMenu}
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
    </section>
  );
}

export default GameBoard;

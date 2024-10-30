import { useState } from 'react';
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
  const [character, setCharacter] = useState();

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
        imgSrc={state.imgSrc}
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
        handleClick={setCharacter}
      />
      <DialogModal
        message={'Are you sure you want to quit?'}
        showDialogModal={showDialogModal}
        toggleDialogModal={toggleDialogModal}
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

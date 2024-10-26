import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Canvas from '../components/Canvas';
import DropMenu from '../components/DropMenu';

function GameBoard() {
  const { state } = useLocation();
  const [clickPosition, setClickPostion] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState('none');
  const [character, setCharacter] = useState();

  function toggleMenu() {
    if (showMenu === 'none') {
      setShowMenu('block');
    } else {
      setShowMenu('none');
    }
  }

  return (
    <section className='grid h-full grid-rows-[10%_90%]'>
      <div className='flex flex-col justify-center'>
        <p>Game board</p>
      </div>
      <Canvas
        imgSrc={state.imgSrc}
        setClickPosition={setClickPostion}
        toggleMenu={toggleMenu}
      />
      <DropMenu
        characters={state.characters}
        position={clickPosition}
        showMenu={showMenu}
        handleClick={setCharacter}
      />
    </section>
  );
}

export default GameBoard;

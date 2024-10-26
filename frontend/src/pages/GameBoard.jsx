import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Canvas from '../components/Canvas';
import DropMenu from '../components/DropMenu';

function GameBoard() {
  const { state } = useLocation();
  const [clickPosition, setClickPostion] = useState({});

  return (
    <section className='grid h-full grid-rows-[10%_90%]'>
      <div className='flex flex-col justify-center'>
        <p>Game board</p>
      </div>
      <Canvas imgSrc={state.imgSrc} setClickPosition={setClickPostion} />
      <DropMenu characters={state.characters} position={clickPosition} />
    </section>
  );
}

export default GameBoard;

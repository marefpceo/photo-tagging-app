import { useLocation } from 'react-router-dom';
import Canvas from '../components/Canvas';

function GameBoard() {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className='grid h-full grid-rows-[10%_90%]'>
      <div className='flex flex-col justify-center'>
        <p>Game board</p>
      </div>
      <Canvas imgSrc={state.imgSrc} />
    </section>
  );
}

export default GameBoard;

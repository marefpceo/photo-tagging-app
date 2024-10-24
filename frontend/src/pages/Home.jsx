import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  return (
    <section className='flex flex-1 flex-col items-center justify-center'>
      <div className='min-w-64 rounded-md border border-slate-400 bg-white p-4 shadow-lg shadow-slate-400'>
        <h2 className='font-bold'>How To Play</h2>
        <p className='mt-3 text-sm'>
          Select a game image to start.
          <br />
          Scan the image to find Waldo and friends.
          <br />
          Once you have found a character, left mouse click on that character.
          <br />
          Select the which character you have found from the menu &#40;
          <em>if applicable</em>&#41;.
        </p>
        <Link to={'/game'}>
          <Button
            type={'button'}
            id={'playBtn'}
            text={'Play'}
            className={
              'mt-10 h-9 w-24 rounded-md bg-red-600 text-lg font-bold text-white shadow-md shadow-slate-400'
            }
          />
        </Link>
      </div>
    </section>
  );
}

export default Home;

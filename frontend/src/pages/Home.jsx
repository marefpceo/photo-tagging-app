import Button from '../components/Button';

function Home() {
  return (
    <>
      <div className='min-w-64 rounded-sm border p-4 shadow-lg shadow-slate-400'>
        <h2>How To Play</h2>
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
        <Button
          type={'button'}
          id={'playBtn'}
          text={'Play'}
          className={'mt-10 h-9 w-24 rounded-md bg-green-600'}
        />
      </div>
    </>
  );
}

export default Home;

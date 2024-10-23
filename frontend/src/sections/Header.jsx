import Button from '../components/Button';

function Header() {
  return (
    <header className='flex justify-between'>
      <h1>Where&apos;s Waldo: Photo Tagging App</h1>
      <Button
        type={'button'}
        id={'leaderBoardBtn'}
        text={'Leader Board'}
        className={
          'h-10 w-32 rounded-md bg-sky-500 p-1 shadow-md shadow-slate-400'
        }
      />
    </header>
  );
}

export default Header;

import Button from './Button';
import { useNavigate } from 'react-router-dom';

function MenuCard({
  image_location,
  id,
  title,
  width,
  height,
  characters,
  startGame,
  getLeaderList,
  toggleLeaderBoard,
}) {
  const navigate = useNavigate();

  function handleClick() {
    startGame(id);
    navigate('/game', {
      state: {
        imageId: id,
        image_location: image_location,
        title: title,
        width: width,
        height: height,
        characters: characters,
      },
    });
  }

  return (
    <div
      className='max-w-1/5 m-0 rounded-sm border border-slate-100 bg-slate-100 pb-4 shadow-md shadow-slate-500'
      id={id}
    >
      <h3 className='p-2'>{title}</h3>
      <div>
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}${image_location}`}
          alt=''
          className='h-44 w-full'
        />
      </div>
      <div className='mt-4 flex items-center justify-evenly'>
        <Button
          type={'button'}
          id={'menuCardBtn'}
          text={'Select'}
          className={
            'h-10 w-20 rounded-md bg-red-500 font-bold text-white hover:shadow-lg'
          }
          onClick={handleClick}
        />
        <Button
          type={'button'}
          id={'leaderBoardBtn'}
          text={'Leader Board'}
          className={
            'h-10 w-28 rounded-md bg-sky-500 p-1 font-bold text-white shadow-md shadow-slate-400'
          }
          onClick={() => {
            getLeaderList(id);
            toggleLeaderBoard();
          }}
        />
      </div>
    </div>
  );
}

export default MenuCard;

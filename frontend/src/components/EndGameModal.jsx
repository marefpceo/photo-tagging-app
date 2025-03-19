import { useEffect } from 'react';
import Button from './Button';

function EndGameModal({
  showEndGameModal,
  endGameStats,
  imageId,
  isHighScore,
  handleClick,
  handleChange,
  setLeaderList,
}) {
  // Get leaderlist
  useEffect(() => {
    if (showEndGameModal === false) {
      return;
    }
    async function getLeaderList() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/leader_list/${imageId}`,
        );

        const responseData = await response.json();
        if (response.ok) {
          setLeaderList(responseData);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getLeaderList();
  }, [showEndGameModal, imageId, setLeaderList]);

  return (
    <div
      className='absolute z-40 row-span-2 mt-2 h-full w-full flex-col justify-center bg-gray-200 bg-opacity-85'
      style={{ display: showEndGameModal === true ? 'flex' : 'none' }}
    >
      <div className='relative mx-auto h-fit w-1/3 rounded-md border border-slate-400 bg-white p-4 shadow-lg shadow-slate-400'>
        <h2 className='font-bold'>You Win!</h2>
        <p>You completed the game in</p>
        <p className='text-xl font-bold text-green-600'>
          {endGameStats.minutes === 0
            ? `${Math.trunc(endGameStats.seconds)} seconds`
            : `${endGameStats.minutes}:${Math.trunc(endGameStats.seconds)}`}
        </p>

        {isHighScore === true ? (
          <div className='m-4 flex flex-col items-center'>
            <p>Enter name to record score to the Leader Board</p>
            <div className='m-2'>
              <input
                type='text'
                name='username'
                id='username'
                className='rounded-md border-2 p-1'
                placeholder='User'
                onChange={handleChange}
              />
            </div>
            <Button
              type={'button'}
              id={'userSubmit'}
              text={'Submit'}
              className={
                'h-10 w-28 rounded-md bg-green-500 font-semibold text-white shadow-md'
              }
              onClick={handleClick}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default EndGameModal;

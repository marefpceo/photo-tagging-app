import Button from './Button';

function EndGameModal({ showEndGameModal, endGameStats, isHighScore }) {

  return (
    <div
      className='absolute z-40 row-span-2 mt-2 h-full w-full flex-col justify-center bg-gray-200 bg-opacity-85'
      style={{ display: showEndGameModal === true ? 'flex' : 'none' }}
    >
      <div className='relative mx-auto h-fit w-1/3 rounded-md border border-slate-400 bg-white p-4 shadow-lg shadow-slate-400'>
        <h2 className='font-bold'>You Win!</h2>
        <p>
          You completed the game in 
        </p>
        <p className='text-xl font-bold text-green-600'>
          {
            endGameStats.minutes === 0 ? `${Math.trunc(endGameStats.seconds)} seconds` : 
              `${endGameStats.minutes}:${Math.trunc(endGameStats.seconds)}`
          }
        </p>

        {
        isHighScore === true ? (
          <div className='m-4 flex flex-col items-center'>
            <p>Enter name to record score to the Leader Board</p>
            <div className='m-2'>
              <input type="text" name='username' id='username' className='p-1 border-2 rounded-md' 
                placeholder='User'/>
            </div>
            <Button
              type={'button'}
              id={'userSubmit'}
              text={'Submit'}
              className={'h-10 w-28 rounded-md shadow-md bg-green-500 text-white font-semibold'}
            />
          </div>
        ) : (
          ''
        )
      }
      
      </div>
      
    </div>
  )
}

export default EndGameModal;
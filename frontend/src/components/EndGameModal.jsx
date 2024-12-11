import Button from './Button';

function EndGameModal({ showEndGameModal, endGameStats }) {

  return (
    <div
      className='absolute z-40 row-span-2 mt-2 h-full w-full flex-col justify-center bg-gray-200 bg-opacity-85'
      style={{ display: showEndGameModal === true ? 'flex' : 'none' }}
    >
      <div className='relative mx-auto h-fit w-fit rounded-md border border-slate-400 bg-white p-4 shadow-lg shadow-slate-400'>
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
      </div>

      <Button

      />
    </div>
  )
}

export default EndGameModal;
import Button from './Button';

function LeaderBoardModal({ showLeaderBoardModal, leaderList, onClick }) {
  return (
    <div
      className='absolute z-40 row-span-2 mt-2 h-full w-full flex-col items-center justify-center bg-gray-200 bg-opacity-85'
      style={{ display: showLeaderBoardModal === true ? 'flex' : 'none' }}
    >
      <div className='relative z-50 mx-auto flex h-fit w-1/4 flex-col justify-evenly rounded-md border bg-white shadow-md shadow-gray-500'>
        <h2>Leader Board</h2>

        <table className='my-3 -ml-8 justify-between'>
          <thead>
            <tr>
              <th className='text-center'>User</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {!leaderList &&
              leaderList.map((leader) => (
                <tr key={leader.id}>
                  <td>{leader.username}</td>
                  <td>
                    {leader.minutes}:
                    {leader.seconds < 10
                      ? '0' + leader.seconds
                      : leader.seconds}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Button
          type={'button'}
          id={'okBtn'}
          text={'Ok'}
          className={
            'mb-4 h-8 w-16 self-center rounded-md bg-green-400 font-bold text-white shadow-md'
          }
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default LeaderBoardModal;

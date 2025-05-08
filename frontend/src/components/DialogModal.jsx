import Button from './Button';
import { Link } from 'react-router-dom';

function DialogModal({ message, showDialogModal, toggleDialogModal, onClick }) {
  
  return (
    <div
      className='absolute z-40 row-span-2 mt-2 h-full w-full flex-col justify-center bg-gray-200 bg-opacity-85'
      style={{ display: showDialogModal === true ? 'flex' : 'none' }}
    >
      <div className='relative z-50 mx-auto flex h-1/5 w-1/4 flex-col justify-evenly rounded-md border bg-white shadow-md shadow-gray-500'>
        <h3>{message}</h3>
        <div className='flex justify-evenly'>
          <Link to={'/menu'}>
            <Button
              type={'button'}
              id={'yesBtn'}
              text={'Yes'}
              className={
                'h-8 w-16 rounded-md bg-green-400 font-bold text-white shadow-md'
              }
              onClick={onClick}
            />
          </Link>
          <Button
            type={'button'}
            id={'noBtn'}
            text={'No'}
            className={
              'h-8 w-16 rounded-md bg-red-500 font-bold text-white shadow-md'
            }
            onClick={toggleDialogModal}
          />
        </div>
      </div>
    </div>
  );
}

export default DialogModal;

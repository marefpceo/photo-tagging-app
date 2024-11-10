import Button from './Button';
import { Link } from 'react-router-dom';

function MenuCard({ image_location, id, title, width, height, characters, startGame }) {
  function handleClick() {
    startGame(id);
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
      <Link
        to={'/game'}
        state={{
          imageId: id,
          image_location: image_location,
          title: title,
          width: width,
          height: height,
          characters: characters,
        }}
      >
        <Button
          type={'button'}
          id={'menuCardBtn'}
          text={'Select'}
          className={
            'mt-4 h-10 w-28 rounded-md bg-red-500 font-bold text-white hover:shadow-lg'
          }
          onClick={handleClick}
        />
      </Link>
    </div>
  );
}

export default MenuCard;

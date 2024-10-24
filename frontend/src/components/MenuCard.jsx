import Button from './Button';
import { Link } from 'react-router-dom';

function MenuCard({ imgSrc, id, title }) {
  return (
    <div
      className='max-w-1/5 m-0 rounded-sm border border-slate-100 bg-slate-100 pb-4 shadow-md shadow-slate-500'
      id={id}
    >
      <h3 className='p-2'>{title}</h3>
      <div>
        <img src={imgSrc} alt='' className='h-44 w-full' />
      </div>
      <Link to={'/game'} state={{ imgSrc: imgSrc }}>
        <Button
          type={'button'}
          id={'menuCardBtn'}
          text={'Select'}
          className={
            'mt-4 h-10 w-28 rounded-md bg-red-500 font-bold text-white hover:shadow-lg'
          }
        />
      </Link>
    </div>
  );
}

export default MenuCard;

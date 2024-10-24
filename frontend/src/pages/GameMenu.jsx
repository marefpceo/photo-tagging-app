import { useState } from 'react';
import beach from '../assets/images/beach_waldo.jpeg';
import store from '../assets/images/department_store_waldo.jpg';
import mountain from '../assets/images/snow_mountain_waldo.jpeg';

function GameMenu() {
  const imageList = [beach, store, mountain];
  const [gameImages, setGameImages] = useState([imageList]);

  return (
    <section className='flex h-full flex-col justify-center'>
      <div className='flex flex-col justify-center'>
        <h2>Make a selection below:</h2>
      </div>
      <div></div>
    </section>
  );
}

export default GameMenu;

import { useState } from 'react';
import MenuCard from '../components/MenuCard';
import { imageList } from '../Utilities/helper';

function GameMenu() {
  // eslint-disable-next-line no-unused-vars
  const [gameImages, setGameImages] = useState(imageList);

  return (
    <section className='flex h-full flex-col justify-center gap-16'>
      <div className='flex flex-col justify-center'>
        <h2>Make a selection below:</h2>
      </div>

      <div className='flex justify-evenly'>
        {gameImages.map((image) => (
          <MenuCard
            key={image.id}
            id={image.id}
            imgSrc={image.imgSrc}
            title={image.title}
            width={image.width}
            height={image.height}
            characters={image.characters}
          />
        ))}
      </div>
    </section>
  );
}

export default GameMenu;

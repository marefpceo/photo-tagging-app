import { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard';

function GameMenu() {
  const [gameImages, setGameImages] = useState([]);

  useEffect(() => {
    async function getImageList() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/image_list`,
        );

        let responseData = await response.json();
        setGameImages(responseData.image_list);
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    }
    getImageList();
  }, []);

  
  async function startGame(gameImageId) {
    try {
      await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/${gameImageId}`, {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='flex h-full flex-col justify-center gap-16'>
      <div className='flex flex-col justify-center'>
        <h2>Make a selection below:</h2>
      </div>

      <div className='flex justify-evenly'>
        {gameImages && gameImages.map((image) => (
          <MenuCard
            key={image.id}
            id={image.id}
            image_location={image.image_location}
            title={image.title}
            width={image.width}
            height={image.height}
            characters={image.characters}
            startGame={startGame}
          />
        ))}
      </div>
    </section>
  );
}

export default GameMenu;

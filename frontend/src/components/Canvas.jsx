import { useEffect, useRef } from 'react';

function Canvas({ imgSrc }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = imgSrc;

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, [imgSrc]);
  return (
    <canvas
      className='h-full w-full'
      ref={canvasRef}
      width={parent.innerWidth}
      height={parent.innerHeight}
    />
  );
}

export default Canvas;

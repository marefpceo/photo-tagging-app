import { useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

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

  function handleClick(e) {
    const transform = getComputedStyle(canvasRef.current);
    e.preventDefault();
    console.log(e.clientX + ',' + e.clientY);
    console.log(transform);
  }

  return (
    <TransformWrapper initialScale={1}>
      <TransformComponent>
        <canvas
          className='h-full w-full'
          ref={canvasRef}
          width={2000}
          height={1200}
          onClick={handleClick}
        />
      </TransformComponent>
    </TransformWrapper>
  );
}

export default Canvas;

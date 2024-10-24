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
  return (
    <TransformWrapper initialScale={1}>
      <TransformComponent>
        <canvas
          className='h-full w-full'
          ref={canvasRef}
          width={1800}
          height={1080}
        />
      </TransformComponent>
    </TransformWrapper>
  );
}

export default Canvas;

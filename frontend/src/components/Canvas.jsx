import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function Canvas({ imgSrc }) {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);

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
    const rect = canvasRef.current.getBoundingClientRect();
    const imgOffsetCoordinates = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    e.preventDefault();
    const imgCoordinates = {
      x: imgOffsetCoordinates.x * scale,
      y: imgOffsetCoordinates.y * scale,
    };
    console.log(imgCoordinates);
    console.log(rect);
    setScale(1);
  }

  return (
    <TransformWrapper
      initialScale={1}
      maxScale={3}
      onZoom={(ref) => {
        scale < 0 ? setScale(1) : setScale(1 / ref.state.scale);
      }}
      onPanning={(ref) => {
        setScale(1 / ref.state.positionX);
      }}
    >
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

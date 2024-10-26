import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function Canvas({ imgSrc, setClickPosition }) {
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
    e.preventDefault();
    const imgCoordinates = {
      x: (e.clientX - rect.left) * scale,
      y: (e.clientY - rect.top) * scale,
    };
    console.log(imgCoordinates); // onClick coordinates accouting for zoom and panned
    console.log(rect); // canvas bounding data
    setClickPosition({
      x: imgCoordinates.x + rect.x,
      y: imgCoordinates.y + rect.y,
    });
  }

  return (
    <>
      <TransformWrapper
        initialScale={1}
        maxScale={3}
        onZoom={(ref) => {
          scale < 0 ? setScale(1) : setScale(1 / ref.state.scale);
        }}
        onPanning={(ref) => {
          scale < 0 ? setScale(1) : setScale(1 / ref.state.scale);
        }}
      >
        <TransformComponent>
          <canvas
            className='h-full w-full'
            ref={canvasRef}
            width={3000}
            height={1700}
            onClick={handleClick}
          />
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}

export default Canvas;

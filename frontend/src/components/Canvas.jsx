import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function Canvas({
  imgSrc,
  width,
  height,
  clickPosition,
  setClickPosition,
  target,
  setTarget,
  toggleMenu,
}) {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = imgSrc;

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      context.strokeStyle = 'red';
      context.lineWidth = 7;
      context.beginPath();
      context.arc(target.x, target.y, 30, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
    };

    function drawShapes() {
      // context.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawShapes();
  }, [imgSrc, target, clickPosition]);

  function handleClick(e) {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;
    const imgCoordinates = {
      x: Math.floor((e.clientX - rect.left) * scale),
      y: Math.floor((e.clientY - rect.top) * scale),
    };
    setClickPosition(imgCoordinates);
    setTarget({
      x: Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width),
      y: Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height),
    });
    setTimeout(toggleMenu(), 500);
  }

  return (
    <>
      <TransformWrapper
        initialScale={1}
        maxScale={2}
        onZoom={(ref) => {
          setScale(1 / ref.state.scale);
        }}
        onPanning={(ref) => {
          setScale(1 / ref.state.scale);
        }}
        disablePadding={true}
      >
        <TransformComponent>
          <canvas
            className='h-full w-full'
            ref={canvasRef}
            width={width}
            height={height}
            onClick={handleClick}
          />
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}

export default Canvas;

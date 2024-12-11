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
  charactersFound
}) {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = `${import.meta.env.VITE_API_BASE_URL}` + imgSrc;

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      context.strokeStyle = 'red';
      context.lineWidth = 7;
      context.beginPath();
      context.arc(target.x, target.y, 30, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();

      if (charactersFound !== undefined) {
        for (let x = 0; x < charactersFound.length; x++) {
          context.strokeStyle = 'green';
          context.lineWidth = 7;
          context.beginPath();
          context.arc(charactersFound[x].xCoord, charactersFound[x].yCoord, 30, 0, 2 * Math.PI);
          context.stroke();
          context.closePath();
        }
      }
    };
  }, [imgSrc, target, clickPosition, charactersFound]);

  function handleClick(e) {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;
    const imgCoordinates = {
      x: Math.floor((e.clientX - rect.left) * scale) + 100,
      y: Math.floor((e.clientY - rect.top) * scale) + 100,
    };
    if (e.ctrlKey) {
      return;
    } else {
      setClickPosition(imgCoordinates);
      setTarget({
        x: Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width),
        y: Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height),
      });
      setTimeout(toggleMenu(), 500);
    }
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
        panning={{ activationKeys: ['Control'] }}
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

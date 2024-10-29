import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function Canvas({ imgSrc, clickPosition, setClickPosition, toggleMenu }) {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [target, setTarget] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // console.log('target: ' + target.x + ',' + target.y);
    const image = new Image();
    image.src = imgSrc;

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      context.strokeStyle = 'black';
      context.lineWidth = 5;
      context.beginPath();
      console.log(
        'Onload Position: ' + clickPosition.x + ',' + clickPosition.y,
      );
      context.arc(clickPosition.x, clickPosition.y, 25, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
    };

    function drawShapes() {
      // context.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawShapes();
    console.log('Click Position: ' + clickPosition.x + ',' + clickPosition.y);
  }, [imgSrc, target, clickPosition]);

  function handleClick(e) {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const imgCoordinates = {
      x: (e.clientX - rect.left) * scale,
      y: (e.clientY - rect.top) * scale,
    };
    // console.log(imgCoordinates); // onClick coordinates accouting for zoom and panned
    console.log(rect); // canvas bounding data
    setClickPosition(imgCoordinates);
    setTimeout(toggleMenu(), 500);
    setTarget(imgCoordinates);
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

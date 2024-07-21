import React, { useEffect, useRef, useState } from 'react';

// Utility function to calculate the position of the pupil
const calculatePupilPosition = (event: MouseEvent, eyeRef: React.RefObject<HTMLDivElement>) => {
  if (!eyeRef.current) return { x: '50%', y: '50%' };

  const { left, top, width, height } = eyeRef.current.getBoundingClientRect();
  const eyeCenterX = left + width / 2;
  const eyeCenterY = top + height / 2;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
  const distance = Math.min(
    Math.sqrt((mouseX - eyeCenterX) ** 2 + (mouseY - eyeCenterY) ** 2),
    width / 4
  );

  const pupilX = distance * Math.cos(angle);
  const pupilY = distance * Math.sin(angle);

  return {
    x: `calc(50% + ${pupilX}px)`,
    y: `calc(50% + ${pupilY}px)`
  };
};

const Eyes: React.FC = () => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const [leftPupilPosition, setLeftPupilPosition] = useState<{ x: string; y: string }>({ x: '50%', y: '50%' });
  const [rightPupilPosition, setRightPupilPosition] = useState<{ x: string; y: string }>({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (leftEyeRef.current) {
        setLeftPupilPosition(calculatePupilPosition(event, leftEyeRef));
      }
      if (rightEyeRef.current) {
        setRightPupilPosition(calculatePupilPosition(event, rightEyeRef));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center space-x-4 p-2">
      <div ref={leftEyeRef} className="relative w-10 h-10 bg-white rounded-full border-2 border-black shadow-md flex justify-center items-center">
        <div
          className="absolute bg-black rounded-full"
          style={{ width: '40%', height: '40%', transform: `translate(-50%, -50%)`, top: leftPupilPosition.y, left: leftPupilPosition.x }}
        />
      </div>
      <div ref={rightEyeRef} className="relative w-10 h-10 bg-white rounded-full border-2 border-black shadow-md flex justify-center items-center">
        <div
          className="absolute bg-black rounded-full"
          style={{ width: '40%', height: '40%', transform: `translate(-50%, -50%)`, top: rightPupilPosition.y, left: rightPupilPosition.x }}
        />
      </div>
      {/* <div className="absolute -top-1 -left-4 w-10 h-1 bg-black rounded-full shadow-lg" style={{ transform: 'rotate(-5deg)' }} />
      <div className="absolute -top-1 -right-4 w-10 h-1 bg-black rounded-full shadow-lg" style={{ transform: 'rotate(5deg)' }} /> */}
    </div>
  );
};

export default Eyes;

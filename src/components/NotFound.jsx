import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaExclamationTriangle, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offset = Math.sqrt(moveX ** 2 + moveY ** 2) / 100;
    set({ offset });
  };

  const calc = (x, y, rad) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
    rad
  ];

  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

  return (
    <div
      className="h-screen w-full bg-gradient-to-br from-purple-700 to-indigo-900 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <animated.div style={{ transform: offset.to(trans1) }} className="absolute">
          <FaExclamationTriangle className="text-yellow-400 text-9xl opacity-20" />
        </animated.div>
        <animated.div style={{ transform: offset.to(trans2) }} className="absolute">
          <FaSearch className="text-blue-400 text-8xl opacity-20" />
        </animated.div>
        <animated.div style={{ transform: offset.to(trans3) }} className="absolute">
          <div className="text-white text-9xl font-bold opacity-10">404</div>
        </animated.div>
        <animated.div style={{ transform: offset.to(trans4) }} className="text-center z-10">
          <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
          <p className="text-2xl text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Go Home
          </Link>
        </animated.div>
      </div>
    </div>
  );
};

export default NotFound;

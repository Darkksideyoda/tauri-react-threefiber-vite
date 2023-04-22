/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import PauseMenu from '../Menus/PauseMenu';

function Box(props: any) {
  const ref = useRef<any>();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
    }
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => !click}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default function RenderBox() {
  const [heightState, setHeightState] = useState(window.innerHeight);
  const [paused, setPaused] = useState(false);

  const handleKeyPress = (e: any): any => {
    if (e.key === 'Escape') {
      setPaused((prevPaused) => !prevPaused);
    }
  };

  return (
    <>
      {paused && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <PauseMenu onCloseMenu={async () => setPaused(!paused)} />
        </div>
      )}
      <div onKeyDown={handleKeyPress} tabIndex={0} role="button">
        <Canvas
          style={{ height: `${heightState}px`, backgroundColor: 'teal' }}
          onCreated={({ gl }) => {
            window.addEventListener('resize', () => {
              setHeightState(window.innerHeight);
              gl.setSize(gl.domElement.clientWidth, window.innerHeight);
            });
          }}
        >
          <ambientLight intensity={0} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

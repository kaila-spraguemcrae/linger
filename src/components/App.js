import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Environment } from '@react-three/drei';
import Lights from './Lights';
import SphereObj from './SphereObj';

function App() {
  return (
    <Canvas camera= {{position: [0, 0, 20], near: 0.1, far: 100, fov: 50}}>
      <Lights/>
      <SphereObj/>
      <Suspense fallback={null}>
        <Environment 
        files='studio_lights.hdr' 
        />
      </Suspense>
    </Canvas>
  );
}

export default App;

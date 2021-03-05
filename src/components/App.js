import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Environment } from '@react-three/drei';
import Lights from './Lights';
import SphereObj from './SphereObj';

function App() {
  return (
    <Canvas camera= {{position: [0, 0, 20], fov: 50}}>
      <Lights/>
      <SphereObj/>
      <Suspense fallback={null}>
        <Environment 
        files='https://rawcdn.githack.com/emmelleppi/component-material/9c967a77c15c84ee5c0be417c4440f6bdcebdb2f/example/studio_small_04_1k.hdr' 
        path='' />
      </Suspense>
    </Canvas>
  );
}

export default App;

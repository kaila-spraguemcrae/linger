import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Lights from './Lights';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';
import { WebGLCubeRenderTarget } from 'three';

function App() {
  return (
    <Canvas camera= {{position: [0, 0, 20], near: 0.1, far: 100, fov: 50}}>
      <CustomSky/>
      <SphereObj envMap = {WebGLCubeRenderTarget.CustomSky}/> 
      {/* <Suspense fallback={null}>
        <Environment
          scene={CustomSky} 
        />
      </Suspense> */}
      <OrbitControls/>
    </Canvas>
  );
}

export default App;
// files='studio_lights.hdr' 

import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';
import { WebGLCubeRenderTarget } from 'three';

function App() {
  return (
    <Canvas camera= {{position: [-15, 20, 30], near: 0.1, fov: 60}} >
      <CustomSky/>
      <SphereObj /> 
      {/* <Suspense fallback={null}>
        <Environment/>
      </Suspense> */}
      <OrbitControls/>
    </Canvas>
  );
}

export default App;
// files='studio_lights.hdr'az

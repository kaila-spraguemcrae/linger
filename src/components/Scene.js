import React from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, softShadows } from '@react-three/drei';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';

export default function Scene() {
  // softShadows()

  return (
    <Canvas shadowMap colorManagement camera= {{position: [-15, 20, 30], near: 0.1, fov: 60}} >
      {/* <directionalLight 
          castShadow
          position={[0,10,0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> */}
      <CustomSky/>
      <SphereObj /> 
      <OrbitControls/>
    </Canvas>
  )
}

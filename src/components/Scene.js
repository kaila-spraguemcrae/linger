import React from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';

export default function Scene() {
  
  return (
    <Canvas camera= {{position: [-15, 20, 30], near: 0.1, fov: 60}} >
      <CustomSky/>
      <SphereObj /> 
      <OrbitControls/>
    </Canvas>
  )
}

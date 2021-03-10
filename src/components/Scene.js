import React from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';
import Welcome from './Welcome';

export default function Scene() {

  return (
    <Canvas shadowMap colorManagement camera= {{position: [-15, 20, 30], near: 0.1, fov: 60 }} >
      <Welcome/>
      <CustomSky/>
      <SphereObj /> 
      <OrbitControls/>
    </Canvas>
  )
}

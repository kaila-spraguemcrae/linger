import React from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls, softShadows } from '@react-three/drei';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';
import Welcome from './Welcome';

export default function Scene() {
  softShadows()
  // useFrame((state) => {
  //   state.camera.lookAt(0,0,0)
  // })
  return (
    <Canvas shadowMap colorManagement camera= {{position: [-15, 20, 30], near: 0.1, fov: 60}} >
      <Welcome/>
      <CustomSky/>
      <SphereObj /> 
      <OrbitControls/>
    </Canvas>
  )
}

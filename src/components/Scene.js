import React, { useRef } from 'react'
import {Canvas, useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';
import SkyBox from './SkyBox';


export default function Scene(props) {

  // const [mainLightColor, setMainLightColorState] = useState(() => {
  //   return "rgb(183,136,101)"
  // })


  // const lightColorHandler = () => {
  //   let r = Math.floor(Math.random() * 255)
  //   let g = Math.floor(Math.random() * 255)
  //   let b = Math.floor(Math.random() * 255)
    
  //   setMainLightColorState(() => {
  //     return `rgb(${r},${g},${b})`
  //     }
  //   )
  // }
    
  
  return (
    <Canvas camera= {{position: [-15, 20, 30], near: 0.1, fov: 60}} >
      <CustomSky/>
      <SkyBox />
      <SphereObj /> 
      <OrbitControls/>
    </Canvas>
  )
}

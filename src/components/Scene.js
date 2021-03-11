import React from 'react'
import { Canvas} from 'react-three-fiber'
import { OrbitControls, softShadows, PerspectiveCamera } from '@react-three/drei';
import SphereObj from './SphereObj';
import CustomSky from './CustomSky';

export default function Scene({}) {
  softShadows()
  // const { fov, up, lookAt } = camera
  // const ref = useUpdate( (pcam) => {
  //   console.log( `lookAt is ${lookAt}`)
  //   pcam.lookAt( new THREE.Vector3( ...lookAt ) )
  // }, [ lookAt ] )
  return (
    <Canvas shadowMap colorManagement>
      <PerspectiveCamera makeDefault position={[-15,20,30]} fov={70} >
        <mesh/>
      </PerspectiveCamera>
      {/* <Welcome/> */}
      <CustomSky/>
      <SphereObj /> 
      <OrbitControls/>
    </Canvas>
  )
}

// camera= {{position: [-15, 20, 30], near: 0.1, fov: 60}}
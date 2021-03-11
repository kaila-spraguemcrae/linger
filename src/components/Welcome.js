import React from "react";
import * as THREE from 'three';
import Katsudon from '../Katsudon.json';



function Welcome(){
  const font = new THREE.FontLoader().parse(Katsudon);

  const textOptions ={
    font, 
    size: 3,
    height: 1,
  }

  return (
    <mesh castShadow position={[-13, 30, -2]}>
      <textGeometry attach='geometry' args={['Welcome to LINGER', textOptions]} />
      <meshStandardMaterial attach='material' color="black"/>
    </mesh>
  );
}

export default Welcome;


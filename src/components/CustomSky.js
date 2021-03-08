import React, { useRef } from 'react';
import { Sky } from '@react-three/drei';
import * as THREE from 'three';
import { useTweaks } from 'use-tweaks';
import { useFrame } from 'react-three-fiber';

function CustomSky() {
  useFrame(({ clock }) => (material.current.time = clock.getElapsedTime()));
  const  material = useRef();
  const { inclination, azimuth  } = useTweaks({
    inclination:{ value: 0, min: 0, max: 1},
    azimuth:{ value: 0.25, min: 0, max: 1}
  });
  return (<Sky
    ref = {material}
    distance={45000}
    inclination={inclination}
    azimuth={azimuth}
  />);
}

export default CustomSky;
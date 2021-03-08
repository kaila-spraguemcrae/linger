import React, { useRef } from 'react';
import { Sky } from '@react-three/drei';
import * as THREE from 'three';
import { useTweaks } from 'use-tweaks';
import { useFrame } from 'react-three-fiber';

function CustomSky() {
  useFrame(({ clock }) => (material.current.time = clock.getElapsedTime()));
  const  material = useRef();
  const { inclination, azimuth, rayleigh, turbidity  } = useTweaks({
    inclination:{ value: 0.5, min: 0, max: 1},
    azimuth:{ value: 0.25, min: 0, max: 1},
    rayleigh: {value: 0.5, min: 0, max: 1},
    turbidity: {value: 0.6, min: 0, max: 1}
  });
  return (<Sky
    ref = {material}
    distance={45000}
    inclination={inclination}
    azimuth={azimuth}
    rayleigh={rayleigh}
    turbidity={turbidity}
  />);
}

export default CustomSky;
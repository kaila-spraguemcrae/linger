import React, { useRef } from 'react';
import { Sky, Plane } from '@react-three/drei';
import { useTweaks } from 'use-tweaks';
import { useFrame } from 'react-three-fiber';

function CustomSky() {
  useFrame(({ clock }) => (material.current.time = clock.getElapsedTime()));
  const material = useRef();
  const { inclination, azimuth, rayleigh, turbidity, intensity} = useTweaks({
    inclination:{ value: 0.5, min: 0, max: 1},
    azimuth:{ value: 0.25, min: 0, max: 1},
    rayleigh: {value: 0.5, min: 0, max: 1},
    turbidity: {value: 0.6, min: 0, max: 1},
    intensity: {value: 0.5, min: 0, max: 1}
  });

  const theta = Math.PI * (inclination - 0.5)
  const phi = 2 * Math.PI * (azimuth - 0.5)

  let x = Math.cos(phi)*10
  let y = Math.sin(theta)*10
  let z = Math.sin(phi)*10

  return (
    <>
      <Sky
        ref = {material}
        distance={45000}
        inclination={inclination}
        azimuth={azimuth}
        rayleigh={rayleigh}
        turbidity={turbidity}
      />  
      <directionalLight
        castShadow
        ref={material}
        position={[x, y, z]}
        color={0xfffadb}
        intensity={intensity}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]}>
        <meshBasicMaterial color="black" wireframe attach="material" />
      </Plane>

      <Plane rotation={[-Math.PI / 2, 0, 0]} position= {[0, 0, 0]} args={[300, 300]} receiveShadow>
        <shadowMaterial attach="material" opacity={0.4}/>
      </Plane>
    </>
    );
}

export default CustomSky;
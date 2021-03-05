import React, { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Material from 'component-material';
import { Sphere } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import { Color } from "three";

function SphereObj({ radius = 4 }){
  const material = useRef();


  return (
    <Sphere args={[radius, 512, 512]}>
      <Material
        ref={material}
        {...props}
        uniforms={{
          radius: { value: radius, type: "float"},
          time: { value: 0, type: "float" },
          color: { value: new Color ("red"), type: "vec3"},
          radiusVariationAmplitude: {
            value: radiusVariationAmplitude, type: "float" 
          },
          radiusNoiseFrequency: {
            value: radiusNoiseFrequency, type: "float"
          }
        }}
      > 
        
      </Material>
    </Sphere>
  );
}

export default SphereObj;


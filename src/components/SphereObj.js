import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import Material from 'component-material';
import { Sphere } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import { Color } from "three";
import { useTweaks } from 'use-tweaks';

function SphereObj({ radius = 4 }){
  const material = useRef();
  const {
    radiusVariationAmplitude,
    radiusNoiseFrequency,
    ...props
  } = useTweaks({
    metalness: { value: 0.9, min: 0, max: 1 },
    clearcoat: { value: 0.1, min: 0, max: 1 },
    roughness: { value: 0.7, min: 0, max: 1 },
    envMapIntensity: { value: 1, min: 0, max: 1 },
    radiusVariationAmplitude: { value: 1, min: 0, max: 5 },
    radiusNoiseFrequency: { value: 0.3, min: 0, max: 2 }
  });

  useFrame(({ clock }) => (material.current.time = clock.getElapsedTime()));

  return (
    <Sphere args={[radius, 512, 512]}>
      <Material
        ref={material}
        {...props}
        uniforms={{
          radius: { value: radius, type: "float"},
          time: { value: 0, type: "float" },
          color: { value: new Color ("white"), type: "vec3"},
          radiusVariationAmplitude: {
            value: radiusVariationAmplitude, type: "float" 
          },
          radiusNoiseFrequency: {
            value: radiusNoiseFrequency, type: "float"
          }
        }}
      > 
        <Material.Vert.Head>
          {
            /*glsl*/ glsl`
            #pragma glslify: snoise = require(glsl-noise-simplex/3d.glsl)
            float fsnoise(float val1, float val2, float val3){
              return snoise(vec3(val1,val2,val3));
            }

            vec3 distortFunct(vec3 transformed, float factor) {
              float radiusVariation = -fsnoise
              (
                transformed.x * radiusNoiseFrequency + time, 
                transformed.y * radiusNoiseFrequency + time, 
                transformed.z * radiusNoiseFrequency + time
              ) * radiusVariationAmplitude * factor;
              return normalize(transformed) * (radiusVariation + radius);
            }

            vec3 orthogonal(vec3 v) {
              return normalize(abs(v.x) > abs (v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
            }

            vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal){

              vec3 tangent1 = orthogonal(normal);
              vec3 tangent2 = normalize(cross(normal, tangent1));

              vec3 nearby1 = position + tangent1 * 0.1;
              vec3 nearby2 = position + tangent2 * 0.1;

              vec3 distorted1 = distortFunct(nearby1, 1.0);
              vec3 distorted2 = distortFunct(nearby2, 1.0);

              return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
            }
          `
        }</Material.Vert.Head>

        <Material.Vert.Body>{
          /*glsl*/ `
            float updateTime = time / 10.0;

            transformed = distortFunct(transformed, 1.0);

            vec3 distortedNormal = distortNormal(position, transformed, normal);

            vNormal = normal + distortedNormal;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
          `
        }</Material.Vert.Body>

        <Material.Frag.Body>{
          /*glsl*/ `
            gl_FragColor = vec4(gl_FragColor.rgb * color, gl_FragColor.a);
          `
        }</Material.Frag.Body>
      </Material>
    </Sphere>
  );
}

export default SphereObj;


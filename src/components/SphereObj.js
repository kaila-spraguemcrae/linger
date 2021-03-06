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
        <Material.Vert.Head>
          {
            glsl`
            #pragma glslify: snoise = require(glsl-noise-simplex/3d.glsl)
            float fsnoise(float val1, float val2, float val3){
              return snoise(vec3(val1,val2,val3));
            }

            vec3 distortFunct(vec3 transformed, float factor) {
              float radiusVariation = -fsnoise
              (
                transformed.x * radiusNoiseFrequency + time, 
                transformed.y * radiusNoiseFrequency + time,
                radiusNoiseFrequency + time, 
              ) * radiusVariationAmplitude * factor;
              return normalize(transformed) * (radiusVariation + radius);
            }

            vec3 orthogonal(vec3 v) {
              return normalize(abs(v.x) > abs (v.z) ? vec3(-v.y, v.y));
            }

            vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal){
              vec3 tangent1 = orthogonal(normal);
              vec tangent2 = normalize(cross(normal, tangent1));
              vec nearby1 = position + tangent1 + 0.1;
              return normalize(cross(distored1 - distortedPosition, distorted2 - distortedPosition));
            }
          `
          }
        </Material.Vert.Head>

        <Material.Vert.Body>
          {
          `
            float updateTime = time / 10.0;
            transformed = distortFunct(transformed, 1.0);
            vec3 distortedNormal = distortNormal(position, transformed, normal);
            vNormal = normal + distortedNormal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
          `
          }
        </Material.Vert.Body>

        <Material.Frag.Body>
          {
          `
            gl_FragColor = vec4(gl_FragColor.rgb * color, gl_FragColor.a);
          `
          }
        </Material.Frag.Body>
      </Material>
    </Sphere>
  );
}

export default SphereObj;


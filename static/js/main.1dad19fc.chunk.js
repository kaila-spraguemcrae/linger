(this.webpackJsonplinger=this.webpackJsonplinger||[]).push([[0],{50:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(38),i=t.n(o),c=(t(50),t(39)),s=t(13),l=t(60),x=t(61),d=t(62),v=t(8),m=t(15),u=t(23),y=t(59),p=t(32),h=t(5),b=t(9);var j=function(e){var n=e.radius,t=void 0===n?4:n,r=Object(s.c)(),o=r.scene,i=r.gl,c=new h.WebGLCubeRenderTarget(256,{format:h.RGBFormat,generateMipmaps:!0,minFilter:h.LinearMipmapLinearFilter}),l=new h.CubeCamera(1,1e3,c);l.position.set(0,100,0),o.add(l),Object(s.b)((function(){return l.update(i,o)}));var x=Object(a.useRef)(),d=Object(p.a)({color:"#fff",metalness:{value:.9,min:0,max:1},clearcoat:{value:.1,min:0,max:1},roughness:{value:.7,min:0,max:1},radiusVariationAmplitude:{value:1,min:0,max:5},radiusNoiseFrequency:{value:.3,min:0,max:2}}),j=d.color,f=d.radiusVariationAmplitude,g=d.radiusNoiseFrequency,z=Object(m.a)(d,["color","radiusVariationAmplitude","radiusNoiseFrequency"]);return Object(s.b)((function(e){var n=e.clock;return x.current.time=n.getElapsedTime()})),Object(b.jsx)(y.b,{args:[t,512,512],"position-y":10,castShadow:!0,children:Object(b.jsxs)(u.a,Object(v.a)(Object(v.a)({envMap:l.renderTarget.texture,ref:x},z),{},{uniforms:{radius:{value:t,type:"float"},time:{value:0,type:"float"},color:{value:new h.Color(j),type:"vec3"},radiusVariationAmplitude:{value:f,type:"float"},radiusNoiseFrequency:{value:g,type:"float"}},children:["console.log(color);",Object(b.jsx)(u.a.Vert.Head,{children:"\n            //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1940364240(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1940364240(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1940364240(vec4 x) {\n     return mod289_1940364240(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1940364240(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1940364240 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1940364240 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1940364240;\n  vec3 i1 = min( g_1940364240.xyz, l.zxy );\n  vec3 i2 = max( g_1940364240.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1940364240.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1940364240(i);\n  vec4 p = permute_1940364240( permute_1940364240( permute_1940364240(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1940364240.wyz - D_1940364240.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1940364240 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1940364240 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1940364240.xy,h.z);\n  vec3 p3 = vec3(a1_1940364240.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1940364240(vec4(dot(p0_1940364240,p0_1940364240), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1940364240 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1940364240,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n            float fsnoise(float val1, float val2, float val3){\n              return snoise(vec3(val1,val2,val3));\n            }\n\n            vec3 distortFunct(vec3 transformed, float factor) {\n              float radiusVariation = -fsnoise\n              (\n                transformed.x * radiusNoiseFrequency + time, \n                transformed.y * radiusNoiseFrequency + time, \n                transformed.z * radiusNoiseFrequency + time\n              ) * radiusVariationAmplitude * factor;\n              return normalize(transformed) * (radiusVariation + radius);\n            }\n\n            vec3 orthogonal(vec3 v) {\n              return normalize(abs(v.x) > abs (v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));\n            }\n\n            vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal){\n\n              vec3 tangent1 = orthogonal(normal);\n              vec3 tangent2 = normalize(cross(normal, tangent1));\n\n              vec3 nearby1 = position + tangent1 * 0.1;\n              vec3 nearby2 = position + tangent2 * 0.1;\n\n              vec3 distorted1 = distortFunct(nearby1, 1.0);\n              vec3 distorted2 = distortFunct(nearby2, 1.0);\n\n              return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));\n            }\n          "}),Object(b.jsx)(u.a.Vert.Body,{children:"\n            float updateTime = time / 10.0;\n\n            transformed = distortFunct(transformed, 1.0);\n\n            vec3 distortedNormal = distortNormal(position, transformed, normal);\n\n            vNormal = normal + distortedNormal;\n\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n          "}),Object(b.jsx)(u.a.Frag.Body,{children:"\n            gl_FragColor = vec4(gl_FragColor.rgb * color, gl_FragColor.a);\n          "})]}))})},f=t(63);var g=function(){Object(s.b)((function(n){var t=n.clock;return e.current.time=t.getElapsedTime()}));var e=Object(a.useRef)(),n=Object(p.a)({inclination:{value:.5,min:0,max:1},azimuth:{value:.25,min:0,max:1},rayleigh:{value:.5,min:0,max:1},turbidity:{value:.6,min:0,max:1},intensity:{value:.5,min:0,max:1}}),t=n.inclination,r=n.azimuth,o=n.rayleigh,i=n.turbidity,c=n.intensity,l=Math.PI*(t-.5),x=2*Math.PI*(r-.5),d=10*Math.cos(x),v=10*Math.sin(l),m=10*Math.sin(x);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{ref:e,distance:45e3,inclination:t,azimuth:r,rayleigh:o,turbidity:i}),Object(b.jsx)("directionalLight",{castShadow:!0,ref:e,position:[d,v,m],color:16775899,intensity:c,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":200,"shadow-camera-left":-20,"shadow-camera-right":20,"shadow-camera-top":20,"shadow-camera-bottom":-20}),Object(b.jsx)(y.a,{"rotation-x":Math.PI/2,args:[100,100,4,4],children:Object(b.jsx)("meshBasicMaterial",{color:"black",wireframe:!0,attach:"material"})}),Object(b.jsx)(y.a,{rotation:[-Math.PI/2,0,0],position:[0,0,0],args:[300,300],receiveShadow:!0,children:Object(b.jsx)("shadowMaterial",{attach:"material",opacity:.4})})]})};function z(e){return Object(c.a)(e),Object(l.a)(),Object(b.jsxs)(s.a,{shadowMap:!0,colorManagement:!0,children:[Object(b.jsx)(x.a,{makeDefault:!0,position:[-15,20,30],fov:70,children:Object(b.jsx)("mesh",{})}),Object(b.jsx)(g,{}),Object(b.jsx)(j,{}),Object(b.jsx)(d.a,{})]})}var _=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(z,{})})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.1dad19fc.chunk.js.map
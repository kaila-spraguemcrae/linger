import React from "react";
import { useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  
  const texture = loader.load([
    "/bluecloud_ft.jpg",
    "/bluecloud_bk.jpg",
    "/bluecloud_up.jpg",
    "/bluecloud_dn.jpg",
    "/bluecloud_lf.jpg",
    "/bluecloud_rt.jpg",
  ]);

  // scene.background = texture;
  // scene.environment = texture;
  // console.log(scene.environment);

  return null;
}

export default SkyBox;
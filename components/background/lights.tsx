import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import StarField from "./stars";
import RingsBg from "./rings";

import TorusRing from "./torus";

const Lights = () => {
  const pointLight = useRef<THREE.PointLight>(null!);

  // useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  // useFrame((_, delta) => {
  //   if (pointLight.current) {
  //     pointLight.current.position.x += 5 * delta;
  //     pointLight.current.position.z += 20 * delta;
  //     if (pointLight.current.position.z > 120) {
  //       pointLight.current.position.x = -15;
  //       pointLight.current.position.z = -10;
  //     }
  //   }
  // });

  return (
    <>
      <ambientLight intensity={1} />
      {/* <pointLight ref={pointLight} color="#91b4df" intensity={1} position={[-15, 0, -10]} /> */}
    </>
  );
};

export default Lights;

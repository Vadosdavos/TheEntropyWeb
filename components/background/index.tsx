import { Canvas } from "@react-three/fiber";
import { CameraControls, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import StarField from "./stars";
import RingsBg from "./rings";

import TorusRing from "./torus";
import Lights from "./lights";

const Background = () => (
  <Canvas camera={{ position: [0, 0, 100] }} shadows>
    <Lights />
    <StarField />
    <TorusRing position={new THREE.Vector3(0, 0, 50)} />
    <TorusRing position={new THREE.Vector3(0, 0, 89)} />
    <CameraControls />
  </Canvas>
);

export default Background;

import { Canvas } from "@react-three/fiber";
import {
  CameraControls, Center, Environment, Text3D,
} from "@react-three/drei";
import * as THREE from "three";
import fontUrl from "@/public/fonts/Roboto_Regular.json";
import StarField from "./stars";

import TorusRing from "./torus";
import Lights from "./lights";

const Background = () => (
  <Canvas camera={{ position: [0, 0, 100] }} shadows>
    <Environment preset="forest" />
    <Lights />
    <StarField />
    <TorusRing position={new THREE.Vector3(0, 0, 50)} />
    <TorusRing revert position={new THREE.Vector3(0, 0, 89)} />
    <Center position={[0, 0, 50]}>
      <Text3D font={fontUrl as unknown as string} size={2}>
        Enter
        <meshNormalMaterial />
      </Text3D>
    </Center>
    <CameraControls />
  </Canvas>
);

export default Background;

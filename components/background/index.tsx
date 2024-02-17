import { Canvas } from "@react-three/fiber";
import {
  CameraControls, Center, Environment, Text,
} from "@react-three/drei";
import fontUrl from "@/public/fonts/Roboto_Regular.json";
import { useContext } from "react";
import EnterContext from "@/contexts/enter";
import StarField from "./stars";

import TorusRing from "./torus";
import Lights from "./lights";

const Background = () => {
  const { setIsEnter } = useContext(EnterContext);
  return (
    <Canvas camera={{ position: [0, 0, 100] }} shadows style={{ position: "absolute" }}>
      <Environment preset="forest" />
      <Lights />
      <StarField />
      <TorusRing position={[0, 0, 50]} />
      <TorusRing revert position={[0, 0, 89]} />
      <Center position={[0, 0, 50]} onClick={() => setIsEnter(true)}>
        <Text font={fontUrl as unknown as string} fontSize={2} color="gold">
          Enter
        </Text>
      </Center>
      <CameraControls />
    </Canvas>
  );
};

export default Background;

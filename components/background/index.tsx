import { Canvas } from "@react-three/fiber";
import StarField from "./stars";

const Background = () => (
  <Canvas camera={{ position: [0, 0, 100] }}>
    <ambientLight intensity={0.5} />
    <directionalLight color="#fff" position={[0, 0, 1]} />
    <StarField />
  </Canvas>
);

export default Background;

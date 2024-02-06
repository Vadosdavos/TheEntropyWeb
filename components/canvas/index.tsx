import { Canvas } from "@react-three/fiber";
import Space from "./space";

const BackgroundCanvas = () => (
  <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <Space />
  </Canvas>
);

export default BackgroundCanvas;

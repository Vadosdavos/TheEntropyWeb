import { Canvas } from "@react-three/fiber";
import CanvasStar from "./start";

const BackgroundCanvas = () => (
  <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <CanvasStar />
  </Canvas>
);

export default BackgroundCanvas;

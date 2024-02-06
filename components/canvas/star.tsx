import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type StarProps = {
  canvasWidth: number
  canvasHeight: number
  color: string
};

const CanvasStar = ({ canvasWidth, canvasHeight, color }: StarProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.position.y += delta;
    meshRef.current.position.x += delta;
    meshRef.current.position.z -= delta;
    // this.z -= STARS_SPEED;
    // if (z <= 0) {
    //   z = canvasWidth;
    // }
  });

  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  const x = Math.random() * canvasWidth;
  const y = Math.random() * canvasHeight;
  const z = Math.random() * canvasWidth;
  const r = Math.random() * 0.05;
  const pixelX = (x - centerX) * (canvasWidth / z);
  const pixelY = (y - centerY) * (canvasWidth / z);

  return (
    <mesh position={[pixelX, pixelY, 0]} ref={meshRef}>
      <circleGeometry args={[r, 128]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default CanvasStar;

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const CanvasStar = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
  });

  return (
    <mesh position={[1.2, 0, 0]} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default CanvasStar;

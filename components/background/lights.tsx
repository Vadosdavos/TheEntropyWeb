import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import { getRandomNumber } from "@/utils/numbers/random";

const Lights = () => {
  const pointLight = useRef<THREE.PointLight>(null!);

  useFrame((_, delta) => {
    if (pointLight.current) {
      pointLight.current.position.x += getRandomNumber(7, 3) * delta;
      pointLight.current.position.y += getRandomNumber(7, 3) * delta;
      pointLight.current.position.z += getRandomNumber(50, 30) * delta;
      if (pointLight.current.position.z > 120) {
        pointLight.current.position.x = getRandomNumber(10, -17);
        pointLight.current.position.y = getRandomNumber(10, -17);
        pointLight.current.position.z = -10;
      }
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight ref={pointLight} color="#93abc9" intensity={5} position={[-15, -15, -10]} />
    </>
  );
};

export default Lights;

import {
  Edges, Torus, useCubeCamera, useCursor, useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

import texture from "@/public/textures/matcap.png";

type TorusRingProps = {
  position: THREE.Vector3
};

const TorusRing = ({ position }: TorusRingProps) => {
  const [hover, setHover] = useState(false);
  const torusRef = useRef<THREE.Mesh>(null);
  const matcap = useTexture(texture.src);
  useFrame((_, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.z += 0.2 * delta;
    }
  });

  const handle = () => {
    if (torusRef.current) {
      // torusRef.current.rotation.x += 10;
    }
    console.log("first");
  };

  useCursor(hover);

  return (
    <Torus
      ref={torusRef}
      position={position}
      args={[15, 3, 4, 200]}
      onPointerOver={(e) => {
        e.stopPropagation();
        handle();
      }}
      onPointerOut={() => setHover(false)}
    >
      {/* <meshStandardMaterial
        metalness={0.5}
        roughness={0.1}
        color="#C0C0C0"
        map={matcap}
        envMap={matcap}
      /> */}
      <meshMatcapMaterial
        color="#a7add3"
        matcap={matcap}
      />
      <Edges color="#a7add3" />
    </Torus>
  );
};

export default TorusRing;

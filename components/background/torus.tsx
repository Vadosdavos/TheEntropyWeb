import {
  Edges, Torus, useCursor, useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

import lines from "@/public/images/lines.png";
import linesActive from "@/public/images/lines-active.png";

type TorusRingProps = {
  position: THREE.Vector3
  revert?: boolean
};

const TorusRing = ({ position, revert = false }: TorusRingProps) => {
  const [hover, setHover] = useState(false);
  const torusRef = useRef<THREE.Mesh>(null);
  const [linesTexture, linesActiveTexture] = useTexture([lines.src, linesActive.src]);
  linesTexture.wrapS = THREE.RepeatWrapping;
  linesTexture.wrapT = THREE.RepeatWrapping;
  useFrame((_, delta) => {
    if (torusRef.current) {
      if (revert) {
        torusRef.current.rotation.z -= 0.2 * delta;
      } else {
        torusRef.current.rotation.z += 0.2 * delta;
      }
    }
  });

  useCursor(hover, "auto");

  return (
    <Torus
      ref={torusRef}
      position={position}
      args={[15, 3, 4, 300]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        metalness={0.8}
        roughness={0.3}
        color="#66697e"
        map={hover ? linesActiveTexture : linesTexture}
        roughnessMap={linesTexture}
      />
      <Edges color="#656882" />
    </Torus>
  );
};

export default TorusRing;

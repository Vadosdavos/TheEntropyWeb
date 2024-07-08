import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const STARS_SPEED = 10;

const StarField = () => {
  const starFieldRef = useRef<THREE.Points | null>(null);
  useFrame((_, delta) => {
    if (starFieldRef.current) {
      const vertices = starFieldRef.current.geometry.attributes.position;
      // Движение звезд к камере
      for (let i = 0; i < vertices.count; i += 1) {
        vertices.setZ(i, vertices.getZ(i) + delta * STARS_SPEED); // Скорость движения звезд
        if (vertices.getZ(i) > 50) {
          vertices.setZ(i, Math.random() * (-50 + 100) - 100); // Если звезда вышла за пределы экрана, переместить ее в рандомную начальную позицию
        }
      }

      vertices.needsUpdate = true;
    }
  });

  return (
    <Stars
      ref={starFieldRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0.5}
      fade
      speed={0.5}
    />
  );
};

export default StarField;

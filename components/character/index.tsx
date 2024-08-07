/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */

"use client";

import {
  Object3DNode, ObjectMap, useLoader, useThree,
  extend,
  useFrame,
} from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls, TransformControls } from "three-stdlib";

import char from "assets/character.glb";

extend({ OrbitControls, TransformControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

const ROTATE_Y_90 = Math.PI * 0.5;

export const Character = () => {
  const character = useLoader(GLTFLoader, char) as GLTF & ObjectMap;
  const model = useRef(character.scene);

  const target = new THREE.Vector3(0, 0, 0);
  const {
    camera,
    gl: { domElement },
  } = useThree();

  useEffect(() => {
    camera.position.y = 0;
    camera.position.z = 20;
    camera.lookAt(target);
  }, []);

  useFrame(() => {
    model.current.rotation.y += 0.005;
  });

  return (
    <>
      <orbitControls
        args={[camera, domElement]}
        target={target}
        maxDistance={100}
        minDistance={10}
      />
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[100, 100, 100]} />
      <directionalLight intensity={1} position={[50, 50, 100]} />
      <directionalLight intensity={1} position={[-50, -50, -100]} />
      <primitive
        ref={model}
        object={character.scene}
        scale={[25, 25, 25]}
        rotation={[0, -ROTATE_Y_90, 0]}
      />
    </>
  );
};

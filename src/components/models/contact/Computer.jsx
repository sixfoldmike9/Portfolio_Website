import { useGLTF } from "@react-three/drei";
import React, { useMemo } from "react";

export function Computer(props) {
  const { nodes, materials } = useGLTF("/models/computer-optimized-transformed.glb");

  // Optional: define constant positions with useMemo
  const groupPosition = useMemo(() => [-4.005, 67.549, 58.539], []);

  if (!nodes || !materials) return null; // Prevents crash if GLTF isn't loaded

  return (
    <group {...props} dispose={null}>
      <group position={groupPosition}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;

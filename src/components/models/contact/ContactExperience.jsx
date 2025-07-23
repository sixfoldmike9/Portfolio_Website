import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      gl={{ antialias: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight
        position={[5, 5, 3]}
        intensity={2.5}
        color="#ffd9b3"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      <directionalLight
        position={[5, 9, 1]}
        intensity={2.5}
        color="#ffd9b3"
        castShadow
      />

      {/* Camera Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground */}
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          castShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      {/* 3D Model */}
      <Suspense fallback={null}>
        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;

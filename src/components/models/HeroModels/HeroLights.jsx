import * as THREE from "three";
import { useMemo, useEffect } from "react";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

const HeroLights = () => {
  // Initialize RectAreaLightUniformsLib once
  useEffect(() => {
    RectAreaLightUniformsLib.init();
  }, []);

  // Memoized rect area light instance
  const rectAreaLight = useMemo(() => {
    const light = new THREE.RectAreaLight("#a259ff", 15, 3, 2);
    light.position.set(1, 3, 4);
    light.rotation.set(-Math.PI / 4, Math.PI / 4, 0);
    return light;
  }, []);

  return (
    <>
      {/* Lamp's light */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
        castShadow
      />

      {/* Bluish overhead lamp */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={40}
        color="#4cc9f0"
      />

      {/* Purplish side fill */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={60}
        color="#9d4edd"
      />

      {/* Area light for soft moody fill */}
      <primitive object={rectAreaLight} />

      {/* Subtle point lights */}
      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLights;

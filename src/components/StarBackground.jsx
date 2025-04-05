// components/StarBackground.jsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function StarsBackground() {
  const starRef = useRef();

  // Memoize geometry and material so they are created only once
  const stars = useMemo(() => {
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1000;
    const starVertices = [];

    for (let i = 0; i < starCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(600);
      const y = THREE.MathUtils.randFloatSpread(600);
      const z = THREE.MathUtils.randFloatSpread(600);
      starVertices.push(x, y, z);
    }

    starGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
    });

    return new THREE.Points(starGeo, starsMaterial);
  }, []);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0005;
    }
  });

  return <primitive object={stars} ref={starRef} />;
}

const StarBackground = () => {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <StarsBackground />
    </Canvas>
  );
};

export default StarBackground;

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function DynamicSphere() {
  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color="#a3a6ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingCubes() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <Float
          key={i}
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={2}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5,
          ]}
        >
          <mesh rotation={[Math.random() * Math.PI, 0, 0]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="#c180ff" metalness={0.5} roughness={0.1} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        <DynamicSphere />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}

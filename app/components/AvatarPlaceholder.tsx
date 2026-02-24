"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

/* ─── Logo URLs (Devicons CDN) — one per cube face ─── */
const LOGO_URLS = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
];

/* ─── Canvas texture: logo drawn at 60 % of face, centred ─── */
function makeLogoTexture(url: string): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 16;

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    ctx.clearRect(0, 0, size, size);
    const drawSize = size * 0.6;           // 60 % of face
    const offset = (size - drawSize) / 2; // centred
    ctx.drawImage(img, offset, offset, drawSize, drawSize);
    tex.needsUpdate = true;
  };
  img.src = url;
  return tex;
}

/* ─── Main rotating cube ─── */
function RotateCube() {
  const cubeRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const targetRot = useRef(new THREE.Vector3());

  const materials = useMemo(() =>
    LOGO_URLS.map((url) =>
      new THREE.MeshStandardMaterial({
        map: makeLogoTexture(url),
        emissive: new THREE.Color("#ff2020"),
        emissiveIntensity: 0.4,
        color: "#ffffff",
        roughness: 0.2,
        metalness: 0.5,
        opacity: 0.8,
        transparent: true,
        toneMapped: false,
      })
    ), []);

  useFrame(({ mouse, clock: c }) => {
    if (!cubeRef.current) return;

    // Gentle auto-rotation
    targetRot.current.x += 0.004;
    targetRot.current.y += 0.005;
    targetRot.current.z += 0.002;

    // Mouse influence (subtle)
    targetRot.current.x += (mouse.y * 0.4 - targetRot.current.x) * 0.02;
    targetRot.current.y += (mouse.x * 0.4 - targetRot.current.y) * 0.02;

    cubeRef.current.rotation.x +=
      (targetRot.current.x - cubeRef.current.rotation.x) * 0.06;
    cubeRef.current.rotation.y +=
      (targetRot.current.y - cubeRef.current.rotation.y) * 0.06;
    cubeRef.current.rotation.z +=
      (targetRot.current.z - cubeRef.current.rotation.z) * 0.06;

    // Pulse emissive intensity
    const pulse = 1.4 + Math.sin(c.elapsedTime * 2.2) * 0.7;
    (materials as THREE.MeshStandardMaterial[]).forEach(
      (m) => (m.emissiveIntensity = pulse)
    );

    // Sync edge glow
    if (edgesRef.current) {
      (edgesRef.current.material as THREE.LineBasicMaterial).color.setRGB(
        1,
        0.15 + Math.sin(c.elapsedTime * 3) * 0.1,
        0.1
      );
    }
  });

  return (
    <mesh ref={cubeRef} scale={1.4} material={materials}>
      <boxGeometry args={[5, 5, 5]} />
      {/* Glowing wire edges */}
      <lineSegments ref={edgesRef}>
        <edgesGeometry args={[new THREE.BoxGeometry(5.02, 5.02, 5.02)]} />
        <lineBasicMaterial color="#ff2222" toneMapped={false} />
      </lineSegments>
    </mesh>
  );
}


/* ─── Floating particles ─── */
function Particles({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 9 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.3 + Math.random() * 0.7;
    }
    return { positions, speeds };
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = clock.elapsedTime * 0.02;
    // Pulsing opacity
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.opacity = 0.4 + Math.sin(clock.elapsedTime * 1.5) * 0.25;
  });

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geo}>
      <pointsMaterial
        color="#ff4444"
        size={0.12}
        sizeAttenuation
        transparent
        opacity={0.6}
        toneMapped={false}
      />
    </points>
  );
}

/* ─── Pulsing point lights ─── */
function DynamicLights() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (light1.current) {
      light1.current.intensity = 3 + Math.sin(t * 2.1) * 1.5;
      light1.current.position.x = Math.sin(t * 0.7) * 10;
      light1.current.position.z = Math.cos(t * 0.7) * 10;
    }
    if (light2.current) {
      light2.current.intensity = 2 + Math.cos(t * 1.8) * 1;
      light2.current.position.x = Math.cos(t * 0.5) * -8;
      light2.current.position.y = Math.sin(t * 0.9) * 8;
    }
  });

  return (
    <>
      <pointLight ref={light1} color="#ff2222" position={[8, 4, 8]} distance={30} />
      <pointLight ref={light2} color="#ff8866" position={[-8, -4, -6]} distance={25} />
    </>
  );
}

/* ─── Main export ─── */
export default function Avatar() {
  return (
    <div className="avatar-canvas-container">
      <Canvas
        camera={{ position: [18, 18, 18], fov: 30, near: 0.1, far: 200 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Base lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[-6, 6, -6]} intensity={0.4} color="#ff3333" />

        {/* Animated point lights */}
        <DynamicLights />

        <OrbitControls enableZoom={false} enableRotate={false} />

        {/* Scene objects */}
        <RotateCube />
        <Particles count={140} />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            intensity={2.5}
            luminanceThreshold={0.05}
            luminanceSmoothing={0.9}
            kernelSize={5}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

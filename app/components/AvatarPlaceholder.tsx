"use client";

import { useState, useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';


// --- Create a canvas texture with glowing text ---
function TextureText(text: string, color = "#ff2a2a") {
  const size = 1024; // larger for sharper text
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, size, size);

  ctx.font = "bold 120px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = color;

  // Glow effect
  ctx.shadowColor = color;
  ctx.shadowBlur = 0;

  ctx.fillText(text, size / 2, size / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16; // sharper texture
  texture.needsUpdate = true;
  texture.minFilter = THREE.LinearMipMapLinearFilter; // better quality filtering
  texture.wrapS = THREE.ClampToEdgeWrapping; // prevents horizontal repeating/bleeding
  texture.wrapT = THREE.ClampToEdgeWrapping; // prevents vertical repeating/bleeding
  return texture;
}

// --- Rotating cube component ---
function RotateCube() {
  const [hovered, setHovered] = useState(false);
  const cubeRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef(new THREE.Vector3(0, 0, 0));
  const edgesRef = useRef<THREE.LineSegments>(null);

  // Update rotation each frame
  useFrame(({ mouse }) => {
    if (!cubeRef.current) return;

    if (hovered) {
      targetRotation.current.x = mouse.y * Math.PI * 0.7;
      targetRotation.current.y = mouse.x * Math.PI * 0.7;
    } else {
      targetRotation.current.x += 0.003;
      targetRotation.current.y += 0.003;
      targetRotation.current.z += 0.002;
    }

    cubeRef.current.rotation.x +=
      (targetRotation.current.x - cubeRef.current.rotation.x) * 0.08;
    cubeRef.current.rotation.y +=
      (targetRotation.current.y - cubeRef.current.rotation.y) * 0.08;
    cubeRef.current.rotation.z +=
      (targetRotation.current.z - cubeRef.current.rotation.z) * 0.08;
  });

  // Generate a material for each face
  const materials = useMemo(() => {
    const labels = ["NODE.JS", "MONGODB", "FLUTTER", "AZURE", "GOOGLE CLOUD", "REACT.JS"];
    return labels.map((text) => {
      const texture = TextureText(text);
      return new THREE.MeshStandardMaterial({
        color: "#111",
        map: texture,
        emissive: "#ff2a2a",
        emissiveMap: texture,
        emissiveIntensity: 1.5,
        roughness: 0.2,
        metalness: 0.1,
        opacity: 0.75,
        transparent: true,
        toneMapped: false, // keeps glow bright
      });
    });
  }, []);

  return (
    <mesh
      ref={cubeRef}
      material={materials}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2.7, 2.7, 2.7]} />

      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2.7,2.7,2.7)]} />
        <lineBasicMaterial color="red" linewidth={3} toneMapped={false} />
      </lineSegments>
    </mesh>
  );
}

// --- Main Avatar component ---
export default function Avatar() {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 30 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-6, 3, -6]} intensity={0.3} color="#ff2a2a" />
        <pointLight position={[5, 5, 5]} intensity={0.8} />

        {/* Controls (disabled rotation) */}
        <OrbitControls enableZoom={false} enableRotate={false} />

        {/* Rotating glowing cube */}
        <RotateCube />

        <EffectComposer>
            <Bloom 
             intensity={1.8}
             luminanceThreshold={0}
             luminanceSmoothing={0.8}
             kernelSize={5}
            />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

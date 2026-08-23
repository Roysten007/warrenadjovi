import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WaveformBarsProps {
  count?: number;
  mousePos: { x: number; y: number };
}

function WaveformBars({ count = 48, mousePos }: WaveformBarsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  // Generate bar properties
  const bars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const u = i / (count - 1); // 0 to 1
      const x = (u - 0.5) * 14; // Spread across X
      // Slight arc curve along Z
      const z = -Math.pow((u - 0.5) * 2, 2) * 2.5;
      const initialHeight = 0.5 + Math.sin(u * Math.PI) * 2.2;
      const speed = 1.5 + Math.sin(i * 0.4) * 0.8;
      const phase = i * 0.35;
      return { x, z, initialHeight, speed, phase };
    });
  }, [count]);

  // Animation frame
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle floating rotation & mouse parallax response
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.35,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mousePos.y * 0.25,
        0.05
      );
    }

    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const bar = bars[i];
      // Organic audio wave oscillation
      const noise =
        Math.sin(time * bar.speed + bar.phase) * 0.7 +
        Math.cos(time * 2.2 + bar.phase * 1.5) * 0.5 +
        Math.sin(time * 3.8 + i * 0.2) * 0.3;

      const dynamicScale = Math.max(0.15, bar.initialHeight + noise * 1.8);
      mesh.scale.y = THREE.MathUtils.lerp(mesh.scale.y, dynamicScale, 0.15);
      mesh.position.y = mesh.scale.y / 2; // keep base on floor
    });
  });

  return (
    <group ref={groupRef} position={[0, -1.8, 0]}>
      {bars.map((bar, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          position={[bar.x, 0, bar.z]}
        >
          <boxGeometry args={[0.18, 1, 0.18]} />
          <meshStandardMaterial
            color="#C3D809"
            emissive="#C3D809"
            emissiveIntensity={0.85}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

// 2D Mobile Fallback Canvas for optimal performance & battery
function MobileWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    const count = 28;

    const render = () => {
      time += 0.04;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const barWidth = width / count;
      for (let i = 0; i < count; i++) {
        const u = i / count;
        const h = Math.abs(Math.sin(time * 2 + i * 0.4) * 0.6 + Math.sin(time * 3.5 + i * 0.7) * 0.4);
        const barHeight = Math.max(8, h * height * 0.75);
        const x = i * barWidth;
        const y = height - barHeight;

        // Gradient
        const grad = ctx.createLinearGradient(0, y, 0, height);
        grad.addColorStop(0, '#C3D809');
        grad.addColorStop(1, 'rgba(195, 216, 9, 0.1)');

        ctx.fillStyle = grad;
        ctx.fillRect(x + 2, y, barWidth - 4, barHeight);
      }
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-end justify-center opacity-60">
      <canvas
        ref={canvasRef}
        width={320}
        height={120}
        className="w-full max-w-sm h-28"
      />
    </div>
  );
}

export default function Waveform3D() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-end pb-8">
        <MobileWaveform />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
      <Canvas
        camera={{ position: [0, 0.8, 9], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 4, 3]} intensity={1.5} color="#C3D809" />
        <pointLight position={[-5, -2, -2]} intensity={0.5} color="#FAFAFA" />
        <WaveformBars count={44} mousePos={mousePos} />
      </Canvas>
    </div>
  );
}

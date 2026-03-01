import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'

export function ParticleField({ count = 2000 }) {
  const ref = useRef()
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 16
    positions[i * 3 + 1] = (Math.random() - 0.5) * 16
    positions[i * 3 + 2] = (Math.random() - 0.5) * 16
  }
  useFrame(s => { if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.04 })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#00f5c4" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export function DistortSphere() {
  const groupRef = useRef()
  useFrame(s => {
    if (groupRef.current) {
      groupRef.current.rotation.x = s.clock.elapsedTime * 0.12
      groupRef.current.rotation.y = s.clock.elapsedTime * 0.18
    }
  })
  return (
    <Float speed={1.5} floatIntensity={0.8}>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial color="#00f5c4" roughness={0.1} metalness={0.9} transparent opacity={0.12} />
        </mesh>
        <mesh>
          <torusGeometry args={[2.5, 0.007, 8, 200]} />
          <meshBasicMaterial color="#00f5c4" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.1, 0.005, 8, 200]} />
          <meshBasicMaterial color="#7b5cff" transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

export function WireIco() {
  const ref = useRef()
  useFrame(s => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.2
      ref.current.rotation.y = s.clock.elapsedTime * 0.15
    }
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial color="#7b5cff" wireframe />
    </mesh>
  )
}

export { Stars }

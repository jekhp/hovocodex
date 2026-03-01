import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'

// ─── PARTICLE FIELD ───
export function ParticleField({ count = 2500 }) {
  const ref = useRef()

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 18
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18
    positions[i * 3 + 2] = (Math.random() - 0.5) * 18
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#00f5c4" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// ─── ANIMATED SPHERE WITH RINGS ───
export function DistortSphere() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.12
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.18
    }
  })

  return (
    <Float speed={1.5} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Core sphere */}
        <mesh>
          <sphereGeometry args={[1.8, 64, 64]} />
          <meshStandardMaterial
            color="#00f5c4"
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Inner wireframe */}
        <mesh>
          <sphereGeometry args={[1.6, 32, 32]} />
          <meshBasicMaterial color="#7b5cff" wireframe transparent opacity={0.06} />
        </mesh>

        {/* Ring 1 */}
        <mesh>
          <torusGeometry args={[2.5, 0.007, 8, 200]} />
          <meshBasicMaterial color="#00f5c4" transparent opacity={0.3} />
        </mesh>

        {/* Ring 2 */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.1, 0.005, 8, 200]} />
          <meshBasicMaterial color="#7b5cff" transparent opacity={0.2} />
        </mesh>

        {/* Ring 3 */}
        <mesh rotation={[Math.PI / 5, Math.PI / 4, 0]}>
          <torusGeometry args={[2.8, 0.004, 8, 200]} />
          <meshBasicMaterial color="#00f5c4" transparent opacity={0.12} />
        </mesh>
      </group>
    </Float>
  )
}

// ─── WIREFRAME ICOSAHEDRON (used in Solutions section) ───
export function WireIco() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2
      ref.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })
  return (
    <mesh ref={ref} rotation={[0.5, 0.5, 0]}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial color="#7b5cff" wireframe />
    </mesh>
  )
}

// ─── STARS (re-exported for convenience) ───
export { Stars }

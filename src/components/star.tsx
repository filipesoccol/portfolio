import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'

const Star = (props: ThreeElements['mesh']) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [speed] = useState<number>(10 + Math.random() * 20)
    useFrame((state, delta) => {
        meshRef.current.position.x += delta * speed
        if (meshRef.current.position.x > 500) meshRef.current.position.x = Math.random() * 1000 - 500
    })
    return (
        <mesh
            {...props}
            ref={meshRef}>
            <sphereGeometry args={[0.5, 10, 10]} />
        </mesh>
    )
}

export default Star
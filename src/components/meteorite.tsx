import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame, ThreeElements } from '@react-three/fiber'

const Meteorite = (props: ThreeElements['mesh']) => {
    const meshRef = useRef<any>(null!)
    const [speed, setSpeed] = useState<number>(500)
    useFrame((state, delta) => {
        meshRef.current.translateY(delta * 500);
        if (Math.abs(meshRef.current.position.x) > 3000) reset(meshRef)
        if (Math.abs(meshRef.current.position.y) > 3000) reset(meshRef)
        if (Math.abs(meshRef.current.position.z) > 3000) reset(meshRef)
    })

    const reset = (mesh: any) => {
        meshRef.current.position.x = 200 - Math.random() * 400;
        meshRef.current.position.y = 200 - Math.random() * 400;
        meshRef.current.position.z = -100;
        if (Math.random() > 0.5) setSpeed(-speed)
        meshRef.current.lookAt(new THREE.Vector3(0, 0, -100))
    }

    return (
        <mesh
            {...props}
            ref={meshRef}>
            <cylinderGeometry args={[0.1, 0.1, 40, 4]} />
        </mesh>
    )
}

export default Meteorite
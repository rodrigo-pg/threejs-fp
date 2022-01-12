import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef, useState } from "react";
import * as THREE from "three"

const Model = (props: JSX.IntrinsicElements['mesh']) => {

  //Textures - https://ambientcg.com/
  const [normalMap, roughnessMap] = useLoader(THREE.TextureLoader, ["/Wood066_1K_NormalGL.png", "/Wood066_1K_Roughness.png"])

  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [thetaLengthValue, setThetaLengthValue] = useState(0)
  const [rotateSpeed, setRotateSpeed] = useState(0.01)

    useFrame((state, delta) => {
      if(thetaLengthValue < Math.PI * 2) {
        setThetaLengthValue(oldState => oldState + 0.05)
      } else { 
        rotateSpeed < 0.05 && setRotateSpeed(oldValue => oldValue + 0.01)
        ref.current.rotation.z += 0.08
        ref.current.rotation.y += rotateSpeed
      }
    })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
        <torusGeometry args={[1, 0.1, 30, 200, thetaLengthValue]} />
        <meshStandardMaterial 
        color="#3a3a3a" 
        roughnessMap={roughnessMap}
        normalMap={normalMap}
        />
    </mesh>
  )

};

export default Model;
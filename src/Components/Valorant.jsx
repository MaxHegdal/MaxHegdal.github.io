import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Revolver from "./Revolver"

const Valorant = () => {
  return (
    <Canvas zoom="100">
    <ambientLight intensity={0.5} />
    <Revolver/>
    <OrbitControls enableZoom={true}/>
  </Canvas>
  )
}

export default Valorant
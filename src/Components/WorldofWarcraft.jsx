import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Ash from "./Ash"
const WorldofWarcraft = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Ash />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WorldofWarcraft
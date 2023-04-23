import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Ash from "./Ash"
const WorldofWarcraft = () => {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100]}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Ash />
      <axesHelper scale={1} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WorldofWarcraft
import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #fc8ae6;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #fc8ae6;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  border: none;
  border-radius: 10%;
  width: 100%;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(60px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar></Navbar>
      <Container>
        <Left>
          <Title>Dator. Spel. Gaming.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Detta älskar jag</Subtitle>
          </WhatWeDo>
          <Desc>Jag älskar att spela datorspel</Desc>
          <Button>Lär dig mer</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.7}
                  speed={5}
                />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
          <Img src="./img/Max.png"></Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

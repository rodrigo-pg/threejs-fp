import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense, useState } from 'react'
import { H1, H2, Model, Lights, PageContainer, ModalContainer } from "../components"

const Home: NextPage = () => {

  const [modalDisplayStatus, setModalDisplayStatus] = useState<"none" | "block">("none")

  setTimeout(() => {
   setModalDisplayStatus("block")
  }, 2500)

  return (
    <PageContainer>
      <H1>by Rodrigo Rodrigues</H1>
      <ModalContainer
      display={modalDisplayStatus}
      />
      <H2>A Simple Three JS Example</H2>
      <Canvas 
      camera={{ position: [0, 0, 2] }}
      >
        <Suspense fallback={null}>
          <Lights/>
          <Model/>
        </Suspense>
      </Canvas>
    </PageContainer>
  )

}

export default Home

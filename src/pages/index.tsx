import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense, useState } from 'react'
import Lights from '../components/Light'
import Model from '../components/Model'
import styles from "../styles/index.module.css"

const Home: NextPage = () => {

  const [modalDisplayStatus, setModalDisplayStatus] = useState("none")

  setTimeout(() => {
   setModalDisplayStatus("block")
  }, 2500)

  return (
    <div 
    className={styles.pageContainer}
    >
      <h1>By Rodrigo Rodrigues</h1>
      <div 
      className={styles.modalContainer}
      style={{
        display: modalDisplayStatus
      }}
      />
      <h2>A Simple Three JS Example</h2>
      <Canvas 
      camera={{ position: [0, 0, 2] }}
      >
        <Suspense fallback={null}>
          <Lights/>
          <Model/>
        </Suspense>
      </Canvas>
    </div>
  )

}

export default Home

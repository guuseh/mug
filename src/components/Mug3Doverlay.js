import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";


const styles = {
    height: "80vh",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  }
  
  function Model({current}){

   const gltf = useGLTF(current);
  
   return <primitive object ={gltf.scene} />
  }


export default function Mug3Doverlay(props) {
    
        return (
          <>
          <Suspense fallback={null}>
          <Canvas camera={{ position: [0,0,-0.16]}} style={styles}>
            <ambientLight intensity={1} />
            <group>
            <Model current={props.mug} />
            </group>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
          </Suspense>
          </>
        )
}

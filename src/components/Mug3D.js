import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
// import { withErrorBoundary } from "react-error-boundary";
// import Box from "../components/Box"
// import { Model } from "../components/Firstmug";
// import styled from "styled-components";

// const Wrapper.style={
//     canvas{
//       height: 500px;
//     }`};

function Model(props){
  const gltf = useGLTF("firstmug.glb")
  return <primitive object ={gltf.scene} />
}


export default function Mug3D() {

  return (
    <>
    <Suspense fallback={null}>
    <Canvas camera={{ position: [0,0,-0.3]}} style={{border:"solid 1px", height:"500px"}}>
      <ambientLight intensity={1} />
      <group>
      <Model />
      </group>
      <OrbitControls/>
    </Canvas>
    </Suspense>
    </>
  )
}

useGLTF.preload("firstmug.glb");
import React, { Suspense, useState, useEffect } from 'react'
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
const steps = ["firstmug.glb", "poly2.glb"];

const styles = {
  height: "80vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}

function Model({trigger}){

  const [currentStep, setCurrentStep] = useState(0);
  const hasNextStep = currentStep + 1 < steps.length;

  
      const nextStep = () =>  {
      if(hasNextStep) {
      setCurrentStep(currentStep => currentStep += 1);
      } else{
        setCurrentStep(0);
      }}

  
      useEffect(() => {
        if(trigger){
          nextStep();
        }
      }, [trigger]);


  const baseUrl = steps[currentStep];

  const gltf = useGLTF(baseUrl);
  return <primitive object ={gltf.scene} />

    }

export default function Mug3D({trigger}) {

  return (
    <>
    <Suspense fallback={null}>
    <Canvas camera={{ position: [0,0,-0.16]}} style={styles}>
      <ambientLight intensity={1} />
      <group>
      <Model trigger={trigger}/>
      </group>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
    </Suspense>
    </>
  )
}

useGLTF.preload("firstmug.glb");
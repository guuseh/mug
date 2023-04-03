import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { StyleSheet, css } from "aphrodite"

const steps = ["/mug/1.glb", "/mug/2.glb","/mug/3.glb", "/mug/4.glb", "/mug/5.glb", 
               "/mug/6.glb", "/mug/7.glb", "/mug/8.glb", "/mug/9.glb", "/mug/10.glb",
               "/mug/11.glb","/mug/12.glb","/mug/13.glb","/mug/14.glb", "/mug/15.glb",
               "/mug/16.glb","/mug/17.glb","/mug/18.glb","/mug/19.glb","/mug/20.glb",];


const styles = StyleSheet.create({
  canvas: {
    height: "80vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow: "1px 1px 20px #62A357",
    width: "35vw",
    backgroundColor: "#FAFCFA",
    zIndex: "0",
  "@media (max-width: 600px)":{
    width: "90vw",
  }
}
});


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
    <Canvas camera={{ position: [0,0,-0.16]}} className={css(styles.canvas)}>
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

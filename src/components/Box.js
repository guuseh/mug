import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader"

// export default function Box({...props }){

//     const group=useRef();
//     const { nodes, materials } = useGLTF("firstmug.glb");

//     return(
//         <group ref={group}{...props} dispose={null}>
//             <group position={[0,0,0]} rotation={[0,0,0]}>
//                 <group rotation={[0,0,0]} scale={0.01}>
//                     <group scale={500}>
//         <mesh>
//             <boxBufferGeometry attach="geometry" args={[3,3,3]} />
//             <meshLambertMaterial attach="material" color="blue" />
//         </mesh>
//     )
// }
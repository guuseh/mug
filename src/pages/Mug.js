import React from 'react'
import "../style/mug.css"
import { Link } from "react-router-dom"
import Mug3D from "../components/Mug3D";

export default function Mug() {
  return (
    <>
    <div>Mug</div>
    <Link to="/collection">Collection 1</Link>
    <Mug3D />
    </>
  )
}

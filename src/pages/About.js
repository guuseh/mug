import React, { useState, useEffect } from 'react'
import '../index.css'
import '../style/landing.css'
import '../style/base.css'
import Menu from '../components/Menu'

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[])

  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(true);

  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
  }

  const styleImg = {
    position: "absolute",
    left: "45vw",
    height: "10vh",
    top: "2rem"
  }
  const bottomImg = {
    position: "relative",
    left: "40%",
    height: "10vh"
  }

  return (
    <>
    
    <div className="base">
    {/* <img src="img/testfabric2.png" className="baseHeader"/> */}
      
    <img src="img/1.png" style={styleImg}/>
      <h1>About</h1> 
      <br/>
      <h3>(de)constructing family models</h3>
      <p>Guus Hoeberechts<br/>2022</p>
      <p>What are the normative ideas that surround ‘the family’ and how far can you deviate from them and still be considered one? 
      When we picture a family, why do we often imagine a nuclear one when there are many ways to form strong familial relationships?</p>

      <p>How do social constructs such as the family come into existence and begin to define the invisible rules we live by? The social 
      construction of reality partly determines how we inhabit this world, but its development goes unnoticed. We humans established 
      long ago (over a very extended period of time) that some things are meant to be a certain way. Unknowingly or unreflectively, 
      we still live by these definitions today. They have no inherent meaning but the meaning we collectively give them, a meaning that 
      could be completely different if the past had diverged slightly. Is there a way to change our understanding to create a new future?</p>

      <p>Our norms are (re)confirmed by the visual and physical representations we see in our day-to-day lives. In the west, we grow up mostly 
      seeing symbols representing the nuclear family, so we believe that they must carry the one true meaning. The fiction turns into fact. 
      By presenting alternatives, ‘(de)constructing family models’ seeks to open up the boundaries we have placed on the social concept of a 
      family. Because sometimes the emotional conditions we expect from a family are not fulfilled by those related to us.</p>

      <p>This collection of everyday cups is transformed to tell a range of different stories about the family. The simple objects are familiar 
      to us and for daily use, making them the ideal artefact for spreading new ideas, and cementing a transforming social construct. The 
      illustrations are derived from a series of intimate conversations about family, and created collaboratively to visualise each individual’s 
      unique perception of family. They vary from abstract images to literal depictions, just as our personal thoughts do.</p>

      <p>The visitor is invited to contribute to an archive of visualisations on the website, where their drawing will be publicly available to 
      further guide the conversation and change. Here, they can also read more in- depth information, get an insight into the illustrations on 
      the cups, or get in contact to possibly have their own cup created, through a one-on-one session or workshop where we talk and visualise together.</p>

      <p>The collection of cups should always be viewed as incomplete, as more stories will consistently reveal themselves while we continue to 
      unravel our definition of family.</p>

      <img src="img/1.png" style={bottomImg}/>
    
    </div>
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className="toggle" onClick={() => { handleMenu()}}><h4>{icon ? `↑` : `↓`}</h4></div>
    </>
  )
}
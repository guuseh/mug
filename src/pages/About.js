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
  const [bg, setBg] = useState(true);


  const handleMenu = () => {
    setToggle(!toggle)
    setIcon(!icon)
    setBg(!bg)
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
      
    <img src="img/cer/1.png" style={styleImg} className="cerImg"/>
      <h1>about</h1> 

      <h3>(de)constructing family models</h3>
      
      <p><span className="hili">Guus Hoeberechts</span> - 
      <a href="https://www.instagram.com/guus.eh/">ig </a> <br/>
      <span className="hili">2022</span></p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;What are the normative ideas that surround ‘the family’ and how far can you deviate from them and still be considered one? 
      When we picture a family, <span className="hili">why do we often imagine a nuclear one</span> when there are many ways to form strong familial relationships?</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;How do social constructs such as the family come into existence and begin to define the invisible rules we live by? The social 
      construction of reality partly determines how we inhabit this world, but its development goes unnoticed. We humans established 
      long ago (over a very extended period of time) that some things are meant to be a certain way. Unknowingly or unreflectively, 
      we still live by these definitions today. They have no inherent meaning but the meaning we collectively give them, a meaning that 
      could be completely different if the past had diverged slightly. <span className="hili">Is there a way to change our understanding to create a new future?</span></p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;Our norms are (re)confirmed by the visual and physical representations we see in our day-to-day lives. In the west, we grow up mostly 
      seeing symbols representing the nuclear family, so we believe that they must carry the one true meaning. <span className="hili">The fiction turns into fact. </span> 
       By presenting alternatives, ‘(de)constructing family models’ seeks to open up the boundaries we have placed on the social concept of a 
      family. <span className="hili">Because sometimes the emotional conditions we expect from a family are not fulfilled by those related to us.</span></p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;This collection of everyday cups is transformed to tell a range of different stories about the family. The simple objects are familiar 
      to us and for daily use, making them the ideal artefact for spreading new ideas, and cementing a transforming social construct. The 
      illustrations are derived from a series of intimate conversations about family, and created collaboratively to visualise each individual’s 
      unique perception of family. They vary from abstract images to literal depictions, just as our personal thoughts do.</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;The visitor is invited to contribute to an archive of visualisations on the website, where their drawing will be publicly available to 
      further guide the conversation and change. Here, they can also read more in- depth information, get an insight into the illustrations on 
      the cups, or get in contact to possibly have their own cup created, through a one-on-one session or workshop where we talk and visualise together.</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="hili">The collection of cups should always be viewed as incomplete, as more stories will consistently reveal themselves while we continue to 
      unravel our definition of family</span>.</p>

      <img src="img/cer/21.png" style={bottomImg} className="cerImg"/>

      <p>If you have any questions, don't hesitate to reach out. If you're interested in being interviewed to work on your own personal cup to add 
        to the collection, send me an e-mail and I will get back to you. It might take a while (I'm following a Master's programme at the moment), but 
        I'd love to get in touch:
        <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:guus@familymodels.website">guus @ familymodels.website</a>
        <br/><br/>
        If you added something to the archive that you regret and would like to get removed, send me an e-mail here and I will take it out the database:
        <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:archive@familymodels.website">archive @ familymodels.website</a>
      </p>

      <img src="img/cer/14.png" style={bottomImg} className="cerImg" />
    
    </div>
   
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className={ bg ? "toggle toggled" : "toggle nottoggled" } onClick={() => { handleMenu()}}><h4>{icon ? `≡` : "\u00d7" }</h4></div>
    </>
  )
}
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

  return (
    <>
    
    <div className="base">
    <img src="img/testfabric2.png" className="baseHeader"/>
      
      <h1>About</h1>

      <p>This is a text about the project... </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt blandit sem at rhoncus. Aliquam aliquam, eros id auctor vulputate, lorem neque gravida lectus, vel luctus nisi eros id mi. Vivamus velit ipsum, congue fermentum mi rutrum, egestas pulvinar enim. Etiam hendrerit ut mi quis mattis. Aliquam elementum eget massa vitae vestibulum. Nam at orci scelerisque, dapibus tortor vitae, mollis diam. Fusce aliquet mauris vel gravida mollis. Aenean et enim mollis, interdum erat non, consequat dolor. Donec rhoncus, sem ut ullamcorper accumsan, augue dui facilisis turpis, sed luctus nunc est non purus. In ornare risus lectus. Duis iaculis ipsum sit amet lacus condimentum, a faucibus magna elementum.</p>

      <p>Sed sed dolor convallis, lacinia velit quis, placerat risus. Aenean porta eros quis egestas sollicitudin. Praesent odio leo, faucibus ut libero ut, lobortis cursus elit. Donec et nunc et enim tempor dapibus id sit amet erat. Etiam imperdiet sodales porta. Maecenas interdum orci vitae mollis condimentum. Proin porta quam ipsum, ut pretium ipsum commodo at. Aenean vitae dapibus orci, a molestie ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae felis dignissim, semper leo nec, dapibus elit. Aliquam elementum dui ex, nec ornare dui consectetur et. Nunc commodo eu erat ac congue. Pellentesque id risus a ipsum maximus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

    
    </div>
    <div className="sticky"><Menu toggle={toggle}/></div>
    <div className="toggle" onClick={() => { handleMenu()}}><h4>{icon ? `↑` : `↓`}</h4></div>
    </>
  )
}
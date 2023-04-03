import React, { useState } from 'react'
import "../style/menu.css"
import { useNavigate } from 'react-router-dom'

export default function Menu({toggle}) {
    
    const navigate = useNavigate();
    const [moveOut, setMoveout] = useState(false)


  return (
    <div>
        
        {  toggle ? 
        <div className="menuOn">
          <img src="img/cer/10.png" className="topCer"/>
          <div className="menuItem" onClick={() => {navigate('/archive')}}><img src="/img/cer/3.png" id="menuBG" />&nbsp;drawing archive</div>
            <div className="menuItem" onClick={() => {navigate('/collection')}}><img src="/img/cer/1.png" id="menuBG" />&nbsp;collection 1</div>
            <div className="menuItem" onClick={() => {navigate('/exhibits')}}><img src="/img/cer/2.png" id="menuBG" />&nbsp;past exhibitions</div>
            <div className="menuItem" onClick={() => {navigate('/text')}}><img src="/img/cer/5.png" id="menuBG" />&nbsp;text+bibliography</div>
            <div className="menuItem" onClick={() => {navigate('/about')}}><img src="/img/cer/6.png" id="menuBG" />&nbsp;about+contact</div>
            
            <div id="return" className={moveOut ? "menuItem moveOut" : "menuItem"} 
                onClick={() => {setMoveout(true); setTimeout(()=> {navigate('/')},400)}}>
                {'»'}<i>&nbsp;&nbsp;restart</i></div>
         </div>
        : 
        <div className="menuOff">
          <img src="img/cer/10.png" className="topCer"/>
          <div className="menuItem" onClick={() => {navigate('/archive')}}><img src="/img/cer/3.png" id="menuBG" />&nbsp;drawing archive</div>
            <div className="menuItem" onClick={() => {navigate('/collection')}}><img src="/img/cer/1.png" id="menuBG" />&nbsp;collection 1</div>
            <div className="menuItem" onClick={() => {navigate('/exhibits')}}><img src="/img/cer/2.png" id="menuBG" />&nbsp;past exhibitions</div>
            <div className="menuItem" onClick={() => {navigate('/text')}}><img src="/img/cer/5.png" id="menuBG" />&nbsp;text+bibliography</div>
            <div className="menuItem" onClick={() => {navigate('/about')}}><img src="/img/cer/6.png" id="menuBG" />&nbsp;about+contact</div>
            
            <div id="return" className={moveOut ? "menuItem moveOut" : "menuItem"} 
                onClick={() => {setMoveout(true); setTimeout(()=> {navigate('/')},400)}}>
                {'»'}<i>&nbsp;&nbsp;restart</i></div>
        </div> 
        } 
         

    </div>
  )
}

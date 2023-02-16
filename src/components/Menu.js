import React, { useState } from 'react'
import "../style/menu.css"
import { useNavigate } from 'react-router-dom'

export default function Menu({toggle}) {
    // const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();

  return (
    <div>
        { toggle ?
        <>
        <div className="menuOn">
        <h4 className="menuItem" onClick={() => {navigate('/collection')}}>{'>'}&nbsp;&nbsp;collection 1</h4>
        <h4 className="menuItem" onClick={() => {navigate('/exhibits')}}>{'>'}&nbsp;&nbsp;past exhibitions</h4>
        <h4 className="menuItem" onClick={() => {navigate('/archive')}}>{'>'}&nbsp;&nbsp;drawing archive</h4>
        <h4 className="menuItem" onClick={() => {navigate('/text')}}>{'>'}&nbsp;&nbsp;the text</h4>
        <h4 className="menuItem" onClick={() => {navigate('/bibliography')}}>{'>'}&nbsp;&nbsp;bibliography</h4>
        <h4 className="menuItem" onClick={() => {navigate('/contact')}}>{'>'}&nbsp;&nbsp;get in touch</h4>
        <h4 className="menuItem" onClick={() => {navigate('/about')}}>{'>'}&nbsp;&nbsp;about</h4>
        <h4 className="menuItem" onClick={() => {navigate('/')}}>{'>'}&nbsp;&nbsp;restart</h4>
        </div>

        
        </>
        : null }

    </div>
  )
}

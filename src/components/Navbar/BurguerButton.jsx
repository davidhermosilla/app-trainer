import React from 'react'
import { Burger } from './Navbar.elements'

export default function BurguerButton(props) {
  return (
    <Burger>
        <div onClick={props.handleClick} 
            className={`icon nav-icon-6 ${props.clicked ? 'open' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
    </Burger>
  )
}


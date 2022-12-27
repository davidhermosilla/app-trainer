import React, {useState} from 'react'
import { NavContainer, NavLogo, NavIcon } from './Navbar.elements'
import { BgDiv } from './BgDiv.elements'
import BurguerButton from './BurguerButton'

function Navbar() {
const [clicked, setClicked] = useState(false)

const handleClick = () => {
    setClicked(!clicked)
}

return (
    <>
        <NavContainer>
          <NavLogo to="/">
              <NavIcon />
              <h2>App Trainer <span>Management</span></h2>
            </NavLogo>                     
            <div className={`links ${clicked ? 'active' :  ''}`}>
                <a href='/'>Home</a>
                <a href='/shop'>Shop</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
                <a href='/blog'>Blog</a>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
    </>
  )
}

export default Navbar

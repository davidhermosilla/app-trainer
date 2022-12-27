import styled from "styled-components"
import { IoIosColorFilter } from "react-icons/io";
import { Link } from "react-router-dom"

export const NavContainer = styled.div`
  a{
    color: white;
    size: 3rem;
    text-decoration: none;
    margin-right: 2rem;
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .burguer{
    @media(min-width: 768px){
        display : none;
    }
  }
  

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;  
    text-align: center;
    a{
        color: black;
        font-size: 2rem;
        font-family: 'Source Sans Pro', sans-serif;
        display: block;
    }   
    @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 2rem;
            color: white;
            display: inline;
        }
    }
  }
    
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
        font-family: 'Source Sans Pro', sans-serif;
    }
  }   
`

export const Burger = styled.div`
/* nav-icon-6 */
.nav-icon-6{
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: block;
}
.nav-icon-6 span{
  background-color:#fff;
  position: absolute;
  border-radius: 2px;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
}
.nav-icon-6 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-6 span:nth-child(2){
  top:13px;
  left: 0px;
}
.nav-icon-6 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon-6:not(.open):hover span:nth-child(1){
  transform:  scaleY(1.2);
  left: -5px;
}
.nav-icon-6:not(.open):hover span:nth-child(2){
  transform: rotate(5deg) scaleY(1.1);
}
.nav-icon-6:not(.open):hover span:nth-child(3){
  transform:  scaleY(1.2);
  left: 5px;
}
.nav-icon-6.open span:nth-child(1){
  transform: rotate(45deg) scaleX(0.7);
  top: 13PX;
  left: -8px;
}
.nav-icon-6.open span:nth-child(2){
  transform: scale(0);
  transition-duration: 50ms
}
.nav-icon-6.open span:nth-child(3){
  transform: rotate(-45deg) scaleX(0.7);
  top: 13PX;
  left: 7px;
}
`

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
h2{
    color: #fff;
    font-weight: 400;
    span{
        font-weight: bold;
    }
  }
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
`

export const NavIcon = styled(IoIosColorFilter)`
margin-right: 0.5rem;
size: 20px;
`
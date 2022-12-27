import styled from "styled-components"

export const BgDiv = styled.div`
    background-color: #222;
    position: absolute; 
    top:-1000px;
    left:-1000px;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
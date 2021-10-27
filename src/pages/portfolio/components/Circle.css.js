import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const CircleContainer = styled.div`

    position: relative;
    top:-180px;
    opacity: 0;
    transition: opacity .3s, color 2s;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
      display:none;
  }
    &.spin{
        animation: ${rotate} 20s linear infinite reverse;
        opacity:1;
        transition: opacity .3s, color 2s;
    }


& h3{
    position: absolute;
    top:-210px;
    left:200px;
    z-index:3;
  }
& h3 span {
    position: absolute;
    top:-100%;
    font-size: 20px;
    font-weight:500;
    font-family:${({ theme }) => theme.jost};
    color: ${({ theme }) => theme.colors.second};
    transition:color 2s;
  }
&.spin h3 span {
    color: ${({ theme }) => theme.colors.main};
    transition: color 3s;
  }
`
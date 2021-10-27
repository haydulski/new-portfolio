import React from 'react';
import styled, { keyframes } from 'styled-components'
import LogoColor from '../imgs/logo-1.png'
import LogoWhite from '../imgs/light-logo.png'
const moving = keyframes`
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  10% {
    clip-path: circle(0% at 50% 50%);
  }

  50% {
    clip-path: circle(50% at 50% 50%);
  }
  85%{
    clip-path: circle(50% at 50% 50%);
  }
  100%{
    clip-path: circle(0% at 50% 50%);
  }
`
const moving2 = keyframes`
  0% {
    clip-path: circle(0% at 50% 50%);
  }

  50% {
    clip-path: circle(50% at 50% 50%);
  }
  75%{
    clip-path: circle(0% at 50% 50%);
  }
  100%{
    clip-path: circle(0% at 50% 50%);
  }
`

const Container = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:150px;
height:150px;
opacity:.8;
& .imgs{
    position:relative;
}
& .imgs img{
    width:100%;
    position:absolute;;
    top:0;
    z-index:15;
    clip-path: circle(0% at 50% 50%);
}
& .imgs img.i-one{
    z-index:20;
    animation: ${moving} 3s 0s linear infinite;
}
& .imgs img.i-two{
    z-index:20;
    animation: ${moving2} 3s 1.5s linear infinite;
}
`

function LoadingIndicator() {
    return (<Container>
        <div className='imgs'>
            <img className='i-one' src={LogoWhite} alt="logo1" />
            <img className='i-two' src={LogoColor} alt="logo" />
        </div>
    </Container>)
}

export default LoadingIndicator
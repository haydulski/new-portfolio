import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import DarkSwitcher from '../components/DarkSwitcher'
import { connect } from 'react-redux'
import { switchToDark } from '../redux/actions/darkMode'
import { useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import Translator from './Translator'

const Container = styled.nav`
position:fixed;
left:0;
width:0vw;
top:0;
background:rgba(26, 25, 25, 0.92);
transition: .6s;
z-index:900;
overflow:hidden;
height:100vh;
& ul{
    opacity: 0;
}
&.open{
    width:100vw;
  & ul{
      opacity:1;
      transition:1.2s;
  }
}
`
const List = styled.ul`
list-style:none;
display:block;
width:130px;
line-height:2rem;
list-style:none;
margin: 40vh auto 0;
transition: .2s;
position:relative;
z-index:3;
& li a{
    color: white;
    font-size:2rem;
    text-decoration:none;
    line-height:4rem;
    font-family: ${(props) => props.theme.jost};
    font-weight:800;
    text-transform:uppercase;
    
}
& li a:hover{
    color: ${({ theme }) => theme.colors.second};
}
`
const Menu = styled(MenuIcon)`
color: ${({ theme }) => theme.colors.main};
`
const BtnContainer = styled.div`
position: fixed;
top: 6%;
right:10%;
z-index:900;
display:initial;
&.open{
    display:none;
}
`
const BtnContainer2 = styled.div`
position: fixed;
top: 6%;
right:10%;
z-index:900;
display:none;
&.open{
    display:initial;
}
`
const Noise = styled.canvas`
z-index: 1;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
opacity: .2;
`
function NavigationMenu({ switchToDark, isDark }) {

    const { pathname } = useLocation()

    const [pos, setPos] = useState('open')
    const handlePosition = () => {
        pos === 'close' ? setPos('open') : setPos('close')
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setPos('close')
    }
        , [pathname])

    useEffect(() => {
        if (window.innerWidth > 1025) {
            const noise = () => {
                let canvas, ctx;
                let wWidth, wHeight;
                let noiseData = [];
                let frame = 0;
                let loopTimeout;

                // Create Noise
                const createNoise = () => {
                    const idata = ctx.createImageData(wWidth, wHeight);
                    const buffer32 = new Uint32Array(idata.data.buffer);
                    const len = buffer32.length;
                    for (let i = 0; i < len; i++) {
                        if (Math.random() < 0.5) {
                            buffer32[i] = 0xff000000;
                        }
                    }
                    noiseData.push(idata);
                };

                // Play Noise
                const paintNoise = () => {
                    if (frame === 9) {
                        frame = 0;
                    } else {
                        frame++;
                    }
                    ctx.putImageData(noiseData[frame], 0, 0);
                };

                // Loop
                const loop = () => {
                    paintNoise(frame);
                    loopTimeout = window.setTimeout(() => {
                        window.requestAnimationFrame(loop);
                    }, (100));
                };

                // Setup
                const setup = () => {
                    wWidth = window.innerWidth;
                    wHeight = window.innerHeight;
                    canvas.width = wWidth;
                    canvas.height = wHeight;
                    for (let i = 0; i < 10; i++) {
                        createNoise();
                    }
                    loop();
                };

                // Reset
                let resizeThrottle;
                const reset = () => {
                    window.addEventListener('resize', () => {
                        window.clearTimeout(resizeThrottle);
                        resizeThrottle = window.setTimeout(() => {
                            window.clearTimeout(loopTimeout);
                            setup();
                        }, 200);
                    }, false);
                };

                // Init
                const init = (() => {
                    canvas = document.getElementById('noise-menu');
                    ctx = canvas.getContext('2d');
                    setup();
                })();
            };
            noise();
        }
    }, [])
    return (
        <>
            <BtnContainer className={pos}>
                <IconButton onClick={handlePosition} size='large' ><Menu style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} /></IconButton>
            </BtnContainer>

            <Container className={pos}>
                <Noise id="noise-menu" />
                <BtnContainer2 className={pos}>
                    <IconButton onClick={handlePosition} size='large' ><CloseIcon sx={{ color: 'white', width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} /></IconButton>
                </BtnContainer2>
                <List>
                    <li><Link to="/"><Translator pl={'Główna'} eng={'Home'} /></Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact"><Translator pl={'Kontakt'} eng={'Contact'} /></Link></li>
                    <DarkSwitcher checked={isDark} onClick={() => switchToDark()} />
                </List>

            </Container>
        </>
    )
}
export default connect(state => ({
    isDark: state.darkModeReducer.darkMode
}), { switchToDark })(NavigationMenu)
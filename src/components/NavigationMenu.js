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

const Container = styled.div`
position:fixed;
left:0;
width:0vw;
top:0;
background:rgba(0,0,0,0.85);
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
function NavigationMenu({ switchToDark, isDark }) {

    const { pathname } = useLocation()

    const handleDark = () => {
        switchToDark()
    }
    const [pos, setPos] = useState('close')
    const handlePosition = () => {
        pos === 'close' ? setPos('open') : setPos('close')
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setPos('close')
    }
        , [pathname])
    return (
        <>
            <BtnContainer className={pos}>
                <IconButton onClick={handlePosition} size='large' ><Menu style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} /></IconButton>
            </BtnContainer>

            <Container className={pos}>
                <BtnContainer2 className={pos}>
                    <IconButton onClick={handlePosition} size='large' ><CloseIcon sx={{ color: 'white', width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }} /></IconButton>
                </BtnContainer2>
                <List>
                    <li><Link to="/"><Translator pl={'Główna'} eng={'Home'} /></Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact"><Translator pl={'Kontakt'} eng={'Contact'} /></Link></li>
                    <DarkSwitcher checked={isDark} onClick={handleDark} />
                </List>

            </Container>
        </>
    )
}
export default connect(state => ({
    isDark: state.darkModeReducer.darkMode
}), { switchToDark })(NavigationMenu)
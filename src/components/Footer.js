import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LightLogo from '../imgs/light-logo.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import { switchLanguage } from '../redux/actions/langSwitch'

const Container = styled.div`
width:100%;
height:12vh;
background-color:${({ theme }) => theme.colors.footer};
display:flex;
position:relative;
z-index:5
`
const LogoContainer = styled.div`
flex:4;
height:100%;
border-right:4px solid rgba(255,255,255,0.1);
display:inline-block;
& img{
    height:80%;
    margin-top:2%;
    margin-left:10%;
}

`
const ContactContainer = styled.div`
flex:8;
height:90%;
display:flex;
align-items:center;
justify-content:space-around; 
margin:auto;
& .foot-icons{
    display: flex;
    flex-direction: column;
    width:3%;
    aling-items:space-around;
}
`

function Footer({ language, switchLanguage, isDark }) {
    useEffect(() => {
    }, [language])
    const iconColor = isDark ? 'lightgray' : '#f24405'
    return (
        <Container>
            <LogoContainer><a href="https://github.com/haydulski" rel='noopener noreferrer' target="_blank"><img src={LightLogo} alt="footer logo" /></a></LogoContainer>
            <ContactContainer>
                <div></div>
                <div className="foot-icons">
                    <IconButton href="mailto:contact@prodeveloper.pl"><MailOutlineIcon sx={{ fill: iconColor }} /></IconButton>
                    <IconButton href="tel:+48796176358"><PhoneIcon sx={{ fill: iconColor }} /></IconButton>
                </div>
                <div className="lang-switch" style={{ width: '10px', cursor: 'pointer', color: 'lightgray' }} onClick={() => switchLanguage()}>
                    {language === 'pl' ? 'ENG' : 'PL'}
                </div>
            </ContactContainer>
        </Container>);
}

export default connect((state) => ({
    language: state.languageReducer.language
}), { switchLanguage })(Footer);
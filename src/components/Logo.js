import React from 'react';
import styled from 'styled-components'
import logoImage from '../imgs/logo-1.png'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
position:absolute;
top:3%;
left:5%;
max-width: 100px;
z-index:20;
cursor:pointer;
& img{
    max-width:100%;
}
`

function Logo() {
    let history1 = useHistory()
    const goMain = () => {
        history1.push('/')
    }
    return (
        <Container onClick={goMain}>
            <img src={logoImage} alt="site-logo" />
        </Container>
    );
}

export default Logo;
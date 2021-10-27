import React from 'react';
import { Container, Title, Slogan, MoreBtn, Line1, Line2 } from './Main.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Portfolio, Possibilities, Services, Technology } from './components/index'
import Translator from '../../components/Translator'

function Main() {

    return (
        <Container>
            <header style={{ minHeight: '100vh', overflow: 'hidden' }}>
                <Line1 /> <Line2 />
                <Title>
                    pro developer
                </Title>
                <div style={{ textAlign: "center" }}>
                    <Translator pl={<Slogan>Projektowanie i budowa <span>stron</span> internetowych</Slogan>}

                        eng={<Slogan>Designing and developing of<span> websites</span></Slogan>} />

                </div>
                <div className='more-btn' style={{ textAlign: "center" }}>
                    <Translator pl={<MoreBtn href='#services'>Więcej  <ArrowForwardIcon /></MoreBtn>}
                        eng={<MoreBtn href='#services'>More  <ArrowForwardIcon /></MoreBtn>} />

                </div>
            </header>
            <Services />
            <Possibilities />
            <Technology />
            <Portfolio />
        </Container >
    )
}

export default React.memo(Main)
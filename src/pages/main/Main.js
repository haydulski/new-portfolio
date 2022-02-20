import React, { useRef, useEffect } from 'react';
import { Container, Title, Slogan, MoreBtn, Line1, Line2, PageProgress } from './Main.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Portfolio, Possibilities, Services, Technology } from './components/index'
import Translator from '../../components/Translator'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Main() {

    const bar2 = useRef(null)
    useEffect(() => {
        const el = bar2.current


        gsap.registerPlugin(ScrollTrigger)
        const progress = gsap.timeline()


        progress.from(el, {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none"
        })


        ScrollTrigger.create({
            animation: progress,
            trigger: "body",
            start: "top top",
            end: () => "+=" + document.body.offsetHeight,
            scrub: .4
        })

        return () => {
            progress.restart();
            // ScrollTrigger.kill();
        };
    }, []);


    return (
        <Container>
            <PageProgress ref={bar2} />
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
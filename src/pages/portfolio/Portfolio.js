import React, { useRef, useEffect } from 'react'
import {
    Container, ScrollSection, ScrollSectionR,
    GokSite, GokSite2, GokSite3, ImmoSite, ImmoSite2, ImmoSite3,
    TripSite, TripSite2, TripSite3, AnnaSite, AnnaSite2, AnnaSite3, HdSite, HdSite2, HdSite3,
    MouiSite, MouiSite2, MouiSite3, ProrailSite, ProrailSite2, ProrailSite3,
    BeataSite, BeataSite2, BeataSite3, JumiSite, JumiSite2, JumiSite3,
    DomeSite, DomeSite2, DomeSite3,
    Spacer, Line1, PageProgress
} from './Portfolio.css'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import CircleText from './components/CircleText'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Portfolio() {

    const handleMouseEnter = (e) => {
        const idName = e.target.dataset.target
        const selectedText = document.querySelector(`#${idName}`)
        if (selectedText) {
            selectedText.classList.add('spin')
        }
    }
    const handleMouseOut = (e) => {
        const idName = e.target.dataset.target
        const selectedText = document.querySelector(`#${idName}`)
        if (selectedText) {
            selectedText.classList.remove('spin')
        }
    }
    const bar = useRef(null)

    useEffect(() => {
        const el = bar.current


        gsap.registerPlugin(ScrollTrigger)
        const progress2 = gsap.timeline()


        progress2.from(el, {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none"
        })


        ScrollTrigger.create({
            animation: progress2,
            trigger: "body",
            start: "top top",
            end: () => "+=" + document.body.offsetHeight,
            scrub: .4
        })

        return () => {
            progress2.restart();
            // ScrollTrigger.kill();
        };
    }, []);

    return (
        <ParallaxProvider>
            <Line1 />
            <Container>
                <PageProgress ref={bar} />
                <h1>
                    Portfolio
                </h1>
                <Spacer />
                <ScrollSection>
                    <Parallax className="custom-class" y={[30, -30]} tagOuter="figure">
                        <GokSite href="https://gokmichalowo.pl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='gok' target="_blank" rel="nofollow" />
                        <CircleText id="gok" arc={360} radius={210} >*Strona Domu Kultury w Michałowie </CircleText>
                    </Parallax>
                    <GokSite2 />
                    <GokSite3 />
                </ScrollSection>
                <ScrollSectionR>
                    <ImmoSite3 />
                    <Parallax className="custom-class" y={[-15, 15]} tagOuter="figure">
                        <ImmoSite2 />
                    </Parallax>
                    <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
                        <ImmoSite href="https://immorise.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='immo' target="_blank" rel="nofollow" />
                        <CircleText id="immo" arc={360} radius={210} >*Immorise- digitalizacja nieruchmości </CircleText>
                    </Parallax>
                </ScrollSectionR>

                <ScrollSection>
                    <Parallax className="custom-class" y={[30, -30]} tagOuter="figure">
                        <DomeSite href="https://www.domedekor.pl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='dome' target="_blank" rel="nofollow" />
                        <CircleText id="dome" arc={360} radius={210} >*Dome internetowy sklep AGD </CircleText>
                    </Parallax>
                    <Parallax className="custom-class" y={[15, -15]} tagOuter="figure">
                        <DomeSite2 />
                    </Parallax>
                    <DomeSite3 />
                </ScrollSection>
                <ScrollSectionR>
                    <ProrailSite3 />
                    <ProrailSite2 />
                    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                        <ProrailSite href="http://pro-rail.pl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='prorail' target="_blank" rel="nofollow" />
                        <CircleText id="prorail" arc={360} radius={210} >*Pro-rail kolejowe biuro projektowe</CircleText>
                    </Parallax>
                </ScrollSectionR>

                <ScrollSection>
                    <Parallax className="custom-class" y={[50, -50]} tagOuter="figure">
                        <HdSite href="https://koparkasuwalki.pl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='hdworx' target="_blank" rel="dofollow" />
                        <CircleText id="hdworx" arc={360} radius={210} >*Hdworx usługi minikoparką</CircleText>
                    </Parallax>
                    <Parallax className="custom-class" y={[25, -25]} tagOuter="figure">
                        <HdSite2 />
                    </Parallax>
                    <HdSite3 />
                </ScrollSection>

                <ScrollSectionR>
                    <TripSite3 />
                    <TripSite2 />
                    <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
                        <TripSite href="https://tripky.pl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='tripki' target="_blank" rel="nofollow" />
                        <CircleText id="tripki" arc={360} radius={210} >*Biuro podróży Tripky </CircleText>
                    </Parallax>
                </ScrollSectionR>

                <ScrollSection>
                    <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
                        <AnnaSite href="https://dranna.pl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='anna1' target="_blank" rel="nofollow" />
                        <CircleText id="anna1" arc={360} radius={210} >*Gabinet estetyki kosmetycznej </CircleText>
                    </Parallax>
                    <AnnaSite2 />
                    <AnnaSite3 />
                </ScrollSection>

                <ScrollSectionR>
                    <MouiSite3 />
                    <Parallax className="custom-class" y={[25, -25]} tagOuter="figure">
                        <MouiSite2 />
                    </Parallax>
                    <Parallax className="custom-class" y={[50, -50]} tagOuter="figure">
                        <MouiSite href="https://mouilabel.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='moui' target="_blank" rel="nofollow" />
                        <CircleText id="moui" arc={360} radius={210} >*Mouilabel polska marka odzieżowa</CircleText>
                    </Parallax>
                </ScrollSectionR>
                <ScrollSection>
                    <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
                        <JumiSite href="https://jumitex.pl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='jumi' target="_blank" rel="nofollow" />
                        <CircleText id="jumi" arc={360} radius={210} >*Sklep e-commerce Jumitex </CircleText>
                    </Parallax>
                    <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
                        <JumiSite2 />
                    </Parallax>
                    <JumiSite3 />
                </ScrollSection>

                <ScrollSectionR>
                    <BeataSite3 />
                    <BeataSite2 />
                    <Parallax className="custom-class" y={[-10, 0]} tagOuter="figure">
                        <BeataSite href="https://beatacedrzynska.art/wystawy" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} data-target='beata1' target="_blank" rel="nofollow" />
                        <CircleText id="beata1" arc={360} radius={210} >*Beata Cedrzyńska portfolio prac</CircleText>
                    </Parallax>
                </ScrollSectionR>
            </Container>
            <Spacer />
        </ParallaxProvider>
    )
}
export default React.memo(Portfolio)
import React, { useEffect, useRef } from 'react';
import { Container, Column, Service } from './ServiceSection.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Translator from '../../../components/Translator'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {

    const services = useRef(null);

    useEffect(() => {
        const el = services.current
        gsap.defaults({ ease: 'none', duration: .8 });
        gsap.registerPlugin(ScrollTrigger)
        const animation1 = gsap.timeline()


        animation1.from(el.querySelector("#serv4"), {
            y: 200,
            opacity: 0
        }).from(el.querySelector("#serv2"), { y: 200, opacity: 0 }).from(el.querySelector("#serv3"), { y: 200, opacity: 0 })

        ScrollTrigger.create({
            animation: animation1,
            trigger: el,
            start: "top 50%",
            toggleActions: "play none none reverse"
        })

        return () => {
            animation1.kill();
            ScrollTrigger.kill(true, true);
        };
    }, []);

    return (
        <Container id="services" ref={services}>
            <Translator pl={<h3 className='small-title'>Usługi</h3>} eng={<h3 className='small-title'>Services</h3>} />
            <Column >

                <Service id='serv4'>
                    <StorefrontIcon sx={{ fontSize: 100, color: 'white' }} />
                    <Translator pl={<h4>Sklepy e-commerce</h4>} eng={<h4>E-commerce shops</h4>} />
                </Service >
            </Column>
            <Column>
                <Translator pl={<h3 className='xxl-title'>Usługi</h3>} eng={<h3 className='xxl-title'>Services</h3>} />

                <Service id='serv2'>
                    <LaptopMacIcon sx={{ fontSize: 100, color: 'white' }} />
                    <Translator pl={<h4>Witryny internetowe</h4>} eng={<h4>Websites</h4>} />

                </Service >
            </Column>
            <Column>
                <Service id='serv3'>

                    <MiscellaneousServicesIcon sx={{ fontSize: 100, color: 'white' }} />
                    <Translator pl={<h4>Serwis i rozbudowa</h4>} eng={<h4>Maintenance and development</h4>} />
                </Service >
            </Column >
        </Container >
    );
}

export default Services;
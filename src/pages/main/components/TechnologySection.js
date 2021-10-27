import React from 'react'
import { Container, Column2, Column1, Column3, SingleTech, GradientTech } from './Technology.css'
import Translator from '../../../components/Translator'
import JsLogo from '../../../imgs/tech/js-logo.png'
import ReactLogo from '../../../imgs/tech/react-js-logo.png'
import Php from '../../../imgs/tech/php-logo.png'
import Wordpress from '../../../imgs/tech/wordpress-logo.png'
import WcLogo from '../../../imgs/tech/wc-logo.png'
import Boot from '../../../imgs/tech/bootstrap-logo.png'

function Technology() {
    return (
        <Container>
            <Column1>
                <GradientTech><img src={ReactLogo} alt='react logo' /></GradientTech>
                <GradientTech><img src={Boot} alt='bootstrap logo' /></GradientTech>
            </Column1>
            <Column2>
                <Translator pl={<h3>Technologie</h3>} eng={<h3>Technologies</h3>} />

                <SingleTech><img src={Php} alt='php logo' /></SingleTech>
                <SingleTech><img src={Wordpress} alt='wordpress logo' /></SingleTech>
            </Column2>
            <Column3>
                <SingleTech><img src={JsLogo} alt='javascript logo' /></SingleTech>
                <SingleTech><img src={WcLogo} alt='woocommerce logo' /></SingleTech>
            </Column3>
        </Container>
    );
}

export default Technology;
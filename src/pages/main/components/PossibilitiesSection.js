import React, { useEffect, useRef, useState } from 'react'
import { Container, Text, Line, Circle } from './Possibilities.css'
import Translator from '../../../components/Translator'

function Possibilities() {

    const [circleSize, setCircleSize] = useState(0)
    const cont = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', scrollEvent)
        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
    }, [])

    const scrollEvent = () => {
        if (cont.current) {
            const topFromCircle = Number(cont.current.getBoundingClientRect().top)
            const circleContainerSize = Number(cont.current.offsetHeight)
            const procentage = (((topFromCircle - circleContainerSize) / circleContainerSize).toFixed(2) * -1) + 0.2

            if (procentage >= 0 && procentage <= 1) {
                setCircleSize(procentage)
            }
        }
    }
    return (
        <Container ref={cont}>
            <Line />
            <Circle size={circleSize} />
            <Translator pl={<h3>
                Poszerz swoje <span>możliwości</span>
            </h3>} eng={<h3>
                Expand your <span>possibilities</span>
            </h3>} />

            <Translator pl={
                <Text>
                    Internet daje nam dostęp do nieskończonych możliwości łącząc ludzi i również ich interesy. Jeżeli chciałbyś zaistnieć w sieci lub  rozwinąć istniejącą witrynę to dobrze trafiłeś. Pro Developer pomoże Ci w zbudowaniu atrakcyjnej wizualnie strony opartej na najnowocześniejszych rozwiązaniach technologicznych.
                </Text>
            } eng={<Text>
                The Internet gives us access to endless possibilities connecting people and also their businesses. If you would like to appear on the web or develop an existing website, you are in the right place. Pro Developer will help you build a visually attractive website based on the latest technological solutions.
            </Text>
            } />
        </Container>
    );
}

export default Possibilities;
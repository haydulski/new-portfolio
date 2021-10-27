import React from 'react';
import { Container, Line1, Title, Row } from './Contact.css'

import Translator from '../../components/Translator'
const Form = React.lazy(() => import('./form/Form.js'))

function Contact({ dark }) {

    return (
        <>
            <Line1 />
            <Container>

                <Title>

                    <Translator pl={<h1>Kontakt</h1>} eng={<h1>Contact</h1>} />
                </Title>
                <Row>
                    <div>
                        <ul>
                            <li><a href="mailto:contact@prodeveloper.pl" rel="noopener noreferrer">contact@prodeveloper.pl-</a></li>
                            <li><a href="tel:0048796176358" rel="noopener noreferrer">0048796176358-</a></li>
                            <li><a href="https://www.facebook.com/Prodeveloper2021/" target="_blank" rel="noopener noreferrer">fb/Prodeveloper2021-</a></li>
                        </ul>
                    </div>
                    <div className='form-container'><Form mode={dark} /></div>
                </Row>
            </Container >
        </>
    )
}

export default Contact
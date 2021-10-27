import React from 'react';
import { Container, Column1, Column2, PortfolioBtn } from './Portfolio.css';
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Portfolio() {
    return (
        <Container>
            <Column1>
                <Link to='/portfolio'>
                    <PortfolioBtn >Portfolio <ArrowForwardIcon /></PortfolioBtn>
                </Link>
            </Column1>
            <Column2></Column2>
        </Container>
    );
}

export default Portfolio;
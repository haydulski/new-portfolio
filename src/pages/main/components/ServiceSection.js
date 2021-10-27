import React from 'react';
import { Container, Column, Service } from './ServiceSection.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Translator from '../../../components/Translator'
function Services() {
    return (
        <Container id='services'>
            <h3 className='small-title'>Usługi</h3>
            <Column>

                <Service>
                    <StorefrontIcon sx={{ fontSize: 100, color: 'white', marginTop: '40%' }} />
                    <Translator pl={<h4>Sklepy e-commerce</h4>} eng={<h4>E-commerce shops</h4>} />
                </Service >
            </Column>
            <Column>
                <Translator pl={<h3 className='xxl-title'>Usługi</h3>} eng={<h3 className='xxl-title'>Services</h3>} />

                <Service>
                    <LaptopMacIcon sx={{ fontSize: 100, color: 'white', marginTop: '40%' }} />
                    <Translator pl={<h4>Witryny internetowe</h4>} eng={<h4>Websites</h4>} />

                </Service >
            </Column>
            <Column>
                <Service>

                    <MiscellaneousServicesIcon sx={{ fontSize: 100, color: 'white', marginTop: '40%' }} />
                    <Translator pl={<h4>Serwis i rozbudowa</h4>} eng={<h4>Maintenance and development</h4>} />
                </Service >
            </Column >
        </Container >
    );
}

export default Services;
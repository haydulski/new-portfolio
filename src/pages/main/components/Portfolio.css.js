import styled from "styled-components"
import Button from '@mui/material/Button/Button'

export const Container = styled.div`
min-height:30vh;
display:flex;
& h3{
    color: ${({ theme }) => theme.colors.second};
    position:absolute;
    top: 10%
}
& h4{
    font-size:1.5rem;
    color: ${({ theme }) => theme.colors.main};
}
`

export const Column = styled.div`
min-height:30vh;
flex:1;
display:flex;
flex-direction:column;
padding:20vh 0 10vh 0;
`
export const Column1 = styled(Column)`
flex:2;
border-right: 2px solid ${({ theme }) => theme.colors.light};
align-items:flex-end;
justify-content:center;
`
export const Column2 = styled(Column)`
flex:1;
background-image: linear-gradient(to right, ${({ theme: { dark } }) => dark ? 'rgb(85,85,85)' : '#c3998c'} , transparent);
`
export const PortfolioBtn = styled(Button)`
background-color: ${({ theme }) => theme.colors.button} !important;
color:${({ theme }) => theme.dark ? 'black !important' : 'white !important'};
font-family:${({ theme }) => theme.lato} !important;
font-weight: 400 !important;
padding:10vh 3vw 10vh 20vw !important;
border-radius:0 !important;
font-size:1.2rem !important;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    padding:2vh 4vw 2vh 8vw !important;
}
`
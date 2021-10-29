import styled from 'styled-components'
import img from '../../imgs/main-background.jpg'
import Button from '@mui/material/Button/Button'

export const Container = styled.div`
min-height:100vh;
background-color:${({ theme }) => theme.colors.body};
background-image:url(${({ theme }) => theme.dark ? '' : img});
background-position: center;
background-size: cover;
background-attachment: fixed;
& header .more-btn{
    margin-top:7%;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        margin-top:18%;
    }
}
`
export const Title = styled.h1`
font-size:160px;
color: ${props => props.theme.colors.main};
text-align:center;
text-transform:uppercase;
text-shadow: 0px 8px 0px ${({ theme }) => theme.colors.shadow};
padding-top: calc(50vh - 100px);
@media(max-width: 1380px){
    font-size:8rem;
}
@media(max-width: ${({ theme }) => theme.size.xxl}px){
    font-size:6rem;
}
@media(max-width: ${({ theme }) => theme.size.lg}px){
    font-size:2rem;
    padding-top: calc(50vh - 50px);
    text-shadow: 0px 3px 0px ${({ theme }) => theme.colors.shadow};
}
`
export const Slogan = styled.h2`
border-top: 4px solid ${({ theme }) => theme.colors.second};
border-bottom: 4px solid ${({ theme }) => theme.colors.light};
font-size:2rem;
font-weight:700;
color: ${({ theme }) => theme.colors.second};
text-transform:uppercase;
display:inline-block;
text-align:center;
margin: 10px auto;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    font-size:1rem;
}
& span{
    font-size:inherit;
    font-weight:500;
    color: ${({ theme }) => theme.colors.light};
}
`

export const MoreBtn = styled(Button)`
background-color: ${({ theme }) => theme.colors.button} !important;
color:white !important;
transform:rotate(90deg);
font-family:${({ theme }) => theme.lato} !important;
font-weight: 400 !important;
padding:4px 20px !important;
border-radius:0 !important;
font-size:1.2rem !important;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    font-size:.9rem !important;
}
`
export const Line1 = styled.div`
width:4px;
background-color: ${({ theme }) => theme.colors.shadow};
height:40vh;
margin:0 auto;
position:absolute;
top:0;
left:50%;
transform:translateX(-50%);
`
export const Line2 = styled.div`
width:4px;
background-color: ${({ theme }) => theme.colors.shadow};
height:34vh;
margin:0 auto;
position:absolute;
bottom:0;
left:50%;
transform:translateX(-50%);
`
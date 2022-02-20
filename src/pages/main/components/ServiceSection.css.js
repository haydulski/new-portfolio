import styled from 'styled-components'
import ServiceBg from '../../../imgs/service-bg.jpg'

export const Container = styled.div`
background-color:white;
min-height:100vh;
display:flex;

@media(max-width: ${({ theme }) => theme.size.lg}px){
    flex-direction: column;
    text-align:center;
}
& h3.small-title{
    color: ${({ theme }) => theme.colors.second};
    margin-top:30%;
    display:none;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        display:block;
    }
}
& h3.xxl-title{
    color: ${({ theme }) => theme.colors.second};
    position:absolute;
    top: 10%;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        display:none;
    }
}
& h4{
    font-size:1.5rem;
    color: ${({ theme }) => theme.colors.main};
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        font-size:1rem;
    }
}
`

export const Column = styled.div`
border-right: 2px solid ${({ theme }) => theme.colors.light};
border-left: 2px solid ${({ theme }) => theme.colors.light};
min-height:100vh;
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    border:none;
    min-height:50vh;
}
`
export const Service = styled.div`
width:25vw;
height:25vw;
background-color:black;
background-image:url(${({ theme }) => theme.dark ? '' : ServiceBg});
background-size:cover;
background-position:center;
box-shadow: 1px 5px 7px 1px lightgray;
text-align:center;
text-transform:uppercase;
font-weight:500;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    width:40vw;
    height:40vw;
}
& svg{
    transition:.2s;
    @media(max-width: ${({ theme }) => theme.size.md}px){
        width:48px;
        height:48px;
    }
}
& svg:hover{
    transition:.2s;
    width:160px;
    height:160px;
   
    @media(max-width: ${({ theme }) => theme.size.md}px){
        width:60px;
        height:60px;
    }
}
`
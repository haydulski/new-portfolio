import styled from "styled-components"

export const Container = styled.div`
background-color:${({ theme }) => theme.dark ? 'rgb(28,28,28)' : 'rgba(255,255,255,.8)'};
min-height:100vh;
display:flex;
& h3{
    color: ${({ theme }) => theme.colors.second};
    position:absolute;
    top: 10%;
    z-index:5;
    background:${({ theme }) => theme.dark ? 'transparent' : '#f8f3f0'};
}
& h4{
    font-size:1.5rem;
    color: ${({ theme }) => theme.colors.main};
}
`

export const Column = styled.div`
border-right: 2px solid ${({ theme }) => theme.colors.light};
border-left: 2px solid ${({ theme }) => theme.colors.light};
min-height:100vh;
flex:1;
display:flex;
flex-direction:column;
padding:20vh 0 10vh 0;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    min-height:60vh;
}
`
export const Column1 = styled(Column)`
border-right: 2px solid ${({ theme }) => theme.colors.second};
border-left:none;
align-items:flex-end;
justify-content:space-around;
position:relative;
`
export const Column2 = styled(Column)`
align-items:center;
justify-content:space-around;
position:relative;
border-left: 2px solid ${({ theme }) => theme.colors.second};
@media(max-width: ${({ theme }) => theme.size.lg}px){
    border-right:none;
}
`
export const Column3 = styled(Column)`
align-items:flex-start;
justify-content:space-around;
position:relative;
border-right:none;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    border:none;
}
`

export const SingleTech = styled.div`
width:14vw;
height:14vw;
background-color:${({ theme }) => theme.dark ? 'rgba(255,255,255,0.3)' : theme.colors.light};
background-size:cover;
background-position:center;
text-align:center;
position:relative;
z-index:3;
& img{
    width:80%;
    filter:grayscale(${({ theme: { dark } }) => dark ? '.8' : '0'})
}
display: flex;
align-items: center;
justify-content: center;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    width:24vw;
height:24vw;
}
`
export const GradientTech = styled(SingleTech)`
background-image:linear-gradient(to right, ${({ theme }) => theme.dark ? 'rgba(0,0,0,0.3)' : theme.colors.light} 60%, ${({ theme: { dark } }) => dark ? '#6c6c6c' : '#f244054d'});
`
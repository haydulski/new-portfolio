import styled from "styled-components"

export const Container = styled.div`
min-height: 100vh;
position:relative;
& h3{
    padding-top:24vh;
    margin-left:16%;
    color:${({ theme }) => theme.colors.light};
    font-family:${({ theme }) => theme.lato};
    font-weight:400;
    position:relative;
    font-size:60px;
    z-index:10;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        font-size:30px;
    }
}
& h3 span{
    
    color:${({ theme }) => theme.colors.second};
}
`
export const Text = styled.div`
text-align:left;
width:36vw;
font-size: 1.5rem;
text-transform:uppercase;
color:${({ theme }) => theme.dark ? 'darkgray' : theme.colors.light};
margin-left:16%;
margin-top:10vh;
position:relative;
z-index:5;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    font-size:1rem;
}
`
export const Line = styled.div`
background-color: ${({ theme }) => theme.colors.shadow};
height:100vh;
max-height:100vh;
width:4px;
position: absolute;
top:0;
right:33.22%;
z-index:1;
`
export const Circle = styled.div`
background-color: white;
height:calc(100vh * ${({ size }) => size});
width:calc(100vh * ${({ size }) => size});
position: absolute;
top:50%;
left:50%;
transform:translate(-80%,-50%);
z-index:0;
border-radius:50%;
`

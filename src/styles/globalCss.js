import { createGlobalStyle } from "styled-components"
import { normalize } from 'styled-normalize'
const fontJost = '"Jost", sans-serif'
const fontLato = '"Lato", sans-serif'
export const LightTheme = createGlobalStyle`
${normalize}
html{
    scroll-behavior:smooth;
    background: #d9bead;
}
body{
    background-color: #d9bead;
    color:black;
    transition: background-color 1s;
    overflow-x:hidden;

}
*{
    font-family: ${fontLato};
    font-weight:400;
    font-size:16px;
    padding:0;
    margin:0;
}
h1{
    font-family: ${fontJost};
    font-weight: 800;
    margin:0;
    padding:0;
    text-transform:uppercase;
    @media(max-width: ${({ theme }) => theme.size.md}){
        font-size:1.2rem;
    }
}
h2,h3{
    font-family: ${fontLato};
    font-weight: 400;
    font-size:2.6rem;
    text-transform:uppercase;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        font-size:2rem;
    }
}
h3{
    letter-spacing:6px;
}
span{
    font-size:inherit;
    font-family:inherit;
    font-weight:inherit;
}
a{
    text-decoration:none;
}
`
export const DarkTheme = createGlobalStyle`
${normalize}
html{
    scroll-behavior:smooth;
    background: #000;
}
body{
    background-color: #000;
    color:white;
    transition: background-color 1s;
    overflow-x:hidden;

}
*{
    font-family: ${fontLato};
    font-weight:400;
    font-size:16px;
    padding:0;
    margin:0;
}
h1{
    font-family: ${fontJost};
    font-weight: 800;
    margin:0;
    padding:0;
    text-transform:uppercase;
    @media(max-width: ${({ theme }) => theme.size.md}){
        font-size:1.2rem;
    }
}
h2,h3{
    font-family: ${fontLato};
    font-weight: 400;
    font-size:2.6rem;
    text-transform:uppercase;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        font-size:2rem;
    }
}
h3{
    letter-spacing:6px;
}
span{
    font-size:inherit;
    font-family:inherit;
    font-weight:inherit;
}
a{
    text-decoration:none;
}
`
import styled from 'styled-components'


export const Container = styled.div`
min-height:150vh;
position:relative;
z-index:3;
`

export const Line1 = styled.div`
width:4px;
background-color: ${({ theme }) => theme.colors.shadow};
height:150vh;
margin:0 auto;
position:absolute;
top:0;
left:50%;
transform:translateX(-50%);
z-index:0;
`
export const Title = styled.div`
padding-top:40vh;
margin:0 auto;
text-align:center;
& h1{
    font-size:160px;
    margin:0 auto;
    color:${({ theme }) => theme.colors.main};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.body};
    display:inline;
    position:relative;
    z-index:3;
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        font-size:6rem;
    }
    @media(max-width: ${({ theme }) => theme.size.md}px){
        font-size:3rem;
    }
}
`
export const Row = styled.div`
width:80%;
margin: 0 auto;
display:flex;
@media(max-width:1200px){
 width:100%;
 flex-direction: column;       
}
& div{
    flex:1;
    margin-top:20vh;
    & ul{
        list-style:none;
        color: ${({ theme }) => theme.colors.shadow};
        font-size:2rem;
        text-align:right;
    }
    & ul li a{
        font-size: 2rem;
        color:inherit;
        text-transform:uppercase;
        line-height: 4rem;
        text-decoration:none;
        transition: color 1s;
        @media(max-width: ${({ theme }) => theme.size.lg}px){
            background-color: ${({ theme }) => theme.colors.body};
        }
        @media(max-width: ${({ theme }) => theme.size.md}px){
            font-size:1.2rem;
            
        }
    }
    & ul li a:hover{
        color:white;
        transition: color 1s;
    }
   
}
& div.form-container{
    text-align: center;
    margin-top:10vh;
    & > p {
        color:white;
        font-size: 1.4rem;
    }
}
`
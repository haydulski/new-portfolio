import styled from 'styled-components'
import SiteGok from '../../imgs/gok1b.jpg'
import SiteTrip from '../../imgs/trip1b.jpg'
import SiteImmo from '../../imgs/immo1b.jpg'
import SiteProrail from '../../imgs/prorail1b.jpg'
import SiteDome from '../../imgs/dome1b.jpg'
import SiteHd from '../../imgs/hdworx1b.jpg'
import SiteAnna from '../../imgs/anna1b.jpg'
import SiteJumi from '../../imgs/jumi1b.jpg'
import SiteMoui from '../../imgs/moui1b.jpg'
import SiteBeata from '../../imgs/beata1b.jpg'



export const Container = styled.div`
min-height:200vh;
text-align:center;
overflow-y:hidden;
position:relative;
z-index:5;
& h1{
    font-size:160px;
    font-family:${({ theme }) => theme.lato};
    padding-top:20%;
    color:${({ theme }) => theme.colors.second};
    text-shadow: 0px 3px 0px ${({ theme }) => theme.colors.shadow};
    @media(max-width: ${({ theme }) => theme.size.lg}px){
        font-size:3rem;
        padding-top:50%;
    }
}
`

export const ScrollSection = styled.div`
margin: 60px 24vw 0 16vw;
display:flex;
justify-content:space-between;
align-items:center;
@media(max-width: 1400px){
    margin: 60px 20vw 0 12vw;
}
@media(max-width: ${({ theme }) => theme.size.xxl}px){
    margin: 60px 14vw 0 6vw;
}
@media(max-width: ${({ theme }) => theme.size.lg}px){
    margin: 60px 8vw 0 8vw;
}
`
export const ScrollSectionR = styled(ScrollSection)`
margin: 60px 15vw 0 25vw;
@media(max-width: 1400px){
    margin: 60px 11vw 0 21vw;
}
@media(max-width: ${({ theme }) => theme.size.xxl}px){
    margin: 60px 5vw 0 15vw;
}
@media(max-width: ${({ theme }) => theme.size.lg}px){
    margin: 60px 8vw 0 8vw;
}
`
export const Site = styled.a`
display:block;
background-position:center;
background-size:cover;
position:relative;
z-index:2;
width:360px;
height:360px;
border-radius:50%;
margin: 5px 20px;
box-shadow: 1px 1px 7px 1px rgba(0,0,0,0.2);
@media(max-width: ${({ theme }) => theme.size.lg}px){
    width:40vw;
height:40vw;
}
`
export const GokSite = styled(Site)`
background-image: url(${SiteGok});
`
export const GokSite2 = styled(GokSite)`
background-image: url(${SiteGok});
width:16vw;
height:16vw;
opacity:.5;
`
export const GokSite3 = styled(GokSite)`
background-image: url(${SiteGok});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`

export const ImmoSite = styled(Site)`
background-image: url(${SiteImmo});
`
export const ImmoSite2 = styled(ImmoSite)`
background-image: url(${SiteImmo});
width:16vw;
height:16vw;
opacity:.5;
`
export const ImmoSite3 = styled(ImmoSite)`
background-image: url(${SiteImmo});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
export const DomeSite = styled(Site)`
background-image: url(${SiteDome});
`
export const DomeSite2 = styled(DomeSite)`
background-image: url(${SiteDome});
width:16vw;
height:16vw;
opacity:.5;
`
export const DomeSite3 = styled(DomeSite)`
background-image: url(${SiteDome});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
export const AnnaSite = styled(Site)`
background-image: url(${SiteAnna});
`
export const AnnaSite2 = styled(AnnaSite)`
background-image: url(${SiteAnna});
width:16vw;
height:16vw;
opacity:.5;
`
export const AnnaSite3 = styled(AnnaSite)`
background-image: url(${SiteAnna});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
export const MouiSite = styled(Site)`
background-image: url(${SiteMoui});
`
export const MouiSite2 = styled(MouiSite)`
background-image: url(${SiteMoui});
width:16vw;
height:16vw;
opacity:.5;
`
export const MouiSite3 = styled(MouiSite)`
background-image: url(${SiteMoui});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
// hd site 
export const HdSite = styled(Site)`
background-image: url(${SiteHd});
`
export const HdSite2 = styled(HdSite)`
background-image: url(${SiteHd});
width:16vw;
height:16vw;
opacity:.5;
`
export const HdSite3 = styled(HdSite)`
background-image: url(${SiteHd});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
// pro rail 
export const ProrailSite = styled(Site)`
background-image: url(${SiteProrail});
`
export const ProrailSite2 = styled(ProrailSite)`
background-image: url(${SiteProrail});
width:16vw;
height:16vw;
opacity:.5;
`
export const ProrailSite3 = styled(ProrailSite)`
background-image: url(${SiteProrail});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
// beatka

export const BeataSite = styled(Site)`
background-image: url(${SiteBeata});
`
export const BeataSite2 = styled(BeataSite)`
background-image: url(${SiteBeata});
width:16vw;
height:16vw;
opacity:.5;
`
export const BeataSite3 = styled(BeataSite)`
background-image: url(${SiteBeata});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
// tripky 
export const TripSite = styled(Site)`
background-image: url(${SiteTrip});
`
export const TripSite2 = styled(TripSite)`
background-image: url(${SiteTrip});
width:16vw;
height:16vw;
opacity:.5;
`
export const TripSite3 = styled(TripSite)`
background-image: url(${SiteTrip});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
export const JumiSite = styled(Site)`
background-image: url(${SiteJumi});
`
export const JumiSite2 = styled(JumiSite)`
background-image: url(${SiteJumi});
width:16vw;
height:16vw;
opacity:.5;
`
export const JumiSite3 = styled(JumiSite)`
background-image: url(${SiteJumi});
width:10vw;
height:10vw;
opacity:.2;
@media(max-width: ${({ theme }) => theme.size.lg}px){
    display:none;
}
`
export const Spacer = styled.span`
height:10vh;
display:block
`

export const Shadow = styled.div`
border-radius:50%;
background-color: lightgray;
width:10vw;
height:10vw;
margin:0;
margin-left:50px;
opacity:0.5;
`
export const Shadow2 = styled(Shadow)`
width:5vw;
height:5vw;
`
export const Line1 = styled.div`
width:4px;
background-image: linear-gradient(to bottom, ${({ theme }) => theme.colors.shadow} 20%, transparent);
height:100%;
margin:0 auto;
position:absolute;
top:0;
right:50%;
`
export const PageProgress = styled.div`
position:fixed;
top:0;
left:0;
width:140%;
height:8px;
z-index:30;
background-color:${({ theme }) => theme.colors.second};
`
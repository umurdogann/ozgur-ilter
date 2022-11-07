import styled from "styled-components";
import img1 from '../images/replace/1.png';
import img2 from '../images/replace/2.png';
import img3 from '../images/replace/3.png';
import img4 from '../images/replace/4.png';
import img5 from '../images/replace/5.png';
import img6 from '../images/replace/6.png';
import img7 from '../images/replace/7.png';
import img8 from '../images/replace/8.png';
import img9 from '../images/replace/9.png';
import img10 from '../images/replace/10.png';
import img11 from '../images/replace/11.png';

const Container = styled.div`
margin-top:50px;
width: 100%;
display:flex;
flex-direction:column;
`;
const Title = styled.div`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 84px;
color: #000000;
`;
const Content = styled.div`
margin-top:50px;
font-family: 'Arsenal';

`;
const TextRow = styled.p`
margin: 0px;
padding: 0px;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 33px;
opacity: ${props => props.opacity ? props.opacity : '1'};
`;
const ImageContainer = styled.div`
width:100%;
margin-top: 60px;
display: flex;
flex-direction: column;
gap:23px;
`;
const Column = styled.div`
display:flex;
flex-direction: column;
width:100%;
align-items: flex-start
`;

const Row = styled.div`
width:100%;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap:23px;
`;

const Pictures = styled.img`
width:100%;
`;


const Replace = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
                Re:place
            </Title>
            <Content>
                <TextRow>
                    Physical experiences shape the way beings perceive the tangible terrene, and their sense of<br />
                    belonging arises from the memories brought along. A single place, in its essence, might be<br />
                    apodictic. But when shaped through an individual’s perception, it is incomparably idiosyncratic. In<br />
                    this context, crossing into others' bubbles of reality elevates one's level of consciousness.<br />
                    <br />
                    From the earliest times of history, the desire for closed space, in which humans have sought refuge<br />
                    to protect themselves from natural harm, has become an integral part of everyday life. Through<br />
                    these instincts and the interactions that follow, the identity of place shifts its notion in a<br />
                    universally unique sense.<br />
                    <br />
                    Home, stripped from every notion outside of its door when it’s shut, is what each individual finds<br />
                    within, carries along, and cultivates throughout their journey. Therefore, the concept of location is<br />
                    futile. Be that as it may, the impact of the whereabouts of individuals molds their persona<br />
                    irreversibly through acquired memories.<br />
                    <br />
                    Special thanks to the following names for their collaboration and being the parts of Re:place:<br />
                    <br />
                    <i>
                        Ana Karen Allende (MEX), Baysaa P. (MNG), Tommy Philavong (LAO), Joana Viana (PRT),<br />
                        Denisa Mihalisková (SVK), Paula Sousa (BRA), Marysia Ananiewska (RUS), Allison Hadden (MEX),<br />
                        Tamás Szűcs (HUN), Zolzaya Boldbaatar (MNG), Sri Pyae Kyaw (MMR), Stacy Sample (USA),<br />
                        Demet Damla Şeker (TUR), Mutondwa Nemuranuoni (ZAF), Roberta Schwambach (BRA),<br />
                        Mar Calma (SLV)</i><br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                    2022 Group Exhibition, The Great Sturgeons Turn, Fészek Artist’s Club, Budapest, HU<br />
                    Installation, Overlapping series of videos consists of 8 interviews with personal objects<br />
                    <br />
                    2022 Group Exhibition, Parallel Hungary II, MKE Profil Gallery, Budapest, HU<br />
                    Installation, Interview video screening showcased with 60 photographs
                </TextRow>
            </Content>
            <ImageContainer>
                <Pictures src={img1}></Pictures>
                <Row>
                    <Column>
                        <Pictures src={img2}></Pictures>
                        <Pictures src={img4}></Pictures>
                        <Pictures src={img6}></Pictures>
                        <Pictures src={img8}></Pictures>
                    </Column>
                    <Column>
                        <Pictures src={img3}></Pictures>
                        <Pictures src={img5}></Pictures>
                        <Pictures src={img7}></Pictures>
                        <Pictures src={img9}></Pictures>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Pictures src={img10}></Pictures>
                    </Column>
                    <Column>
                        <Pictures src={img11}></Pictures>
                    </Column>
                </Row>
            </ImageContainer>
        </Container>
    );
}

export default Replace;
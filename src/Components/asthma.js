import styled from "styled-components";
import img1 from '../images/asthma/1.png';
import img2 from '../images/asthma/2.png';

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
align-items: flex-start;
justify-content: flex-start;
gap:23px;
`;

const Row = styled.div`
width:100%;
display:flex;
flex-direction: row;
align-items: center;
gap:23px;
`;

const Pictures = styled.img`
width: 100%;
`;


const Asthma = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
                Asthma
            </Title>
            <Content>
                <TextRow>
                    The artwork itself portrays dead ends as a reflection of asthma as a disease, taking the artist’s<br />
                    personal experience as a starting point. In this sense, some questions came up throughout the<br />
                    birth of the idea of the work concerning our deepest fears and the way we deal with them from<br />
                    childhood and beyond.<br />
                    <br />
                    Having such congenital defects becomes a stalemate. On the other hand, it also teaches us how<br />
                    to cope with certain conditions and develop resilience. So, is it possible for us to know who we<br />
                    might be without these flaws?<br />
                    <br />
                    Asthma, as an artwork, is designed to describe the chronology of an asthma attack with all its<br />
                    darkness and eventual triumph – resilience, strength and perseverance.<br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                    20x20 cm, booklet printed on craft paper<br />
                    Series consists of 14 illustrations 20x20 cm, ink on rag paper
                </TextRow>
            </Content>
            <ImageContainer>
                <Pictures src={img1}></Pictures>
                <Pictures src={img2}></Pictures>

            </ImageContainer>
        </Container>
    );
}

export default Asthma;
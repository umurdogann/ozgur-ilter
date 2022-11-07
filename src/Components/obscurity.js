import styled from "styled-components";
import img1 from '../images/obscurity/1.png';
import img2 from '../images/obscurity/2.png';
import img3 from '../images/obscurity/3.png';
import img4 from '../images/obscurity/4.png';
import img5 from '../images/obscurity/5.png';
import img6 from '../images/obscurity/6.png';
import img7 from '../images/obscurity/7.png';
import img8 from '../images/obscurity/8.png';
import img9 from '../images/obscurity/9.png';
import img10 from '../images/obscurity/10.png';

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


const Obscurity = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
            From Obscurity to Particularity
            </Title>
            <Content>
                <TextRow>
                Individuals interact with places by physical experience, and their perception shapes through<br />
                these structures by the events or memories. From the earliest time of history, the desire for<br />
                closed space, in which humans have sought refuge to protect themselves from natural harm,<br />
                has become an integral part of everyday life. Through these intinctions, followingly, interactions,<br />
                originally and commonly attributed identity of places shifts its notion.<br />
                <br />
                The railway station, Keleti Pályaudvar, has been present for more than a hundred years. The<br />
                course of events that occurred in the city that it is located is historically significant. Today it is<br />
                functioning as a transit area linking one place to another. For a non-local individual, it is nearly<br />
                impossible not to get impressed by this architectural structure and its function. However, for a<br />
                local, it is only a part of the city’s ordinary architectural texture.<br />
                <br />
                For this purpose, understanding the relationship of the architectural structure with the perceiver<br />
                has been the starting point of this study by grounding it in a way to examine their identities from<br />
                past to present in connection with the passing time. The differences in these perceptions lead us<br />
                to think about the concept of a sense of belonging.<br />
                <br />
                Thus, Keleti Pályaudvar has been an efficient exemplar to tackle the notion through the subjects<br />
                of time, space, and human to conclude a better comprehension, objectify in the form of a<br />
                masterpiece coming into existing as a book and assembling theory with the practice in a<br />
                harmonized and visually pleasing result.<br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                2019 Group Exhibition, METU Diploma, A38 Gallery, Budapest, HU<br />
                <br />
                14,8x21 cm, hardcover book<br />
                Series consists of 5 illustrations 10,5x14,5 cm, watercolour, fineliner on rag paper<br />
                Series consists of 24 photographs, 2019 14,5x25,5 cm in print on offset paper, and Rives series
                </TextRow>
            </Content>
            <ImageContainer>
                <Pictures src={img1}></Pictures>
                <Row>
                    <Column width='35' >
                        <Pictures src={img2}></Pictures>
                        <Pictures src={img4}></Pictures>
                    </Column>
                    <Column width='60'>
                        <Pictures src={img3}></Pictures>
                        <Pictures src={img5}></Pictures>
                    </Column>
                </Row>
                <Pictures src={img6}></Pictures>
                <Row>
                    <Column>
                        <Pictures src={img7}></Pictures>
                    </Column>
                    <Column >
                        <Pictures src={img8}></Pictures>
                    </Column>
                </Row>
                <Pictures src={img9}></Pictures>
                <Pictures src={img10}></Pictures>
            </ImageContainer>
        </Container>
    );
}

export default Obscurity;
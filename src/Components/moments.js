import styled from "styled-components";
import img1 from '../images/moments/1.png';
import img2 from '../images/moments/2.png';
import img3 from '../images/moments/3.png';
import img4 from '../images/moments/4.png';
import img5 from '../images/moments/5.png';
import img6 from '../images/moments/6.png';
import img7 from '../images/moments/7.png';
import img8 from '../images/moments/8.png';

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
align-items: center;
justify-content: center;
gap:23px;
`;

const Row = styled.div`
width:100%;
display:flex;
flex-direction: row;
align-items: flex-start;
gap:23px;
`;

const Pictures = styled.img`
width: 100%;
`;


const Moments = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
                Non-Ephemeral Moments
            </Title>
            <Content>
                <TextRow>
                    The series of images reflects the practices of everyday life, conceptualizing here and now.<br />
                    <br />
                    The placeless scenes objectify feeling-based notions and combine them with details and<br />
                    individuals to express solitariness in that particular moment.<br />
                    <br />
                    Placelessness and solitariness are the elements that unify the concept of this work. It attempts<br />
                    to attribute meaning and portray the character as living in the moment through self-perception.<br />
                    In this context, the visual images reflect spontaneous blinks of an eye without fictionalizing<br />
                    while reviving the feelings of stability, calmness, non-ephemeral moments relief, and serenity<br />
                    that make the moment.<br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                    Series consists of 30 analog photographs 13x18 cm, C-type Printing
                </TextRow>
            </Content>
            <ImageContainer>
                <Pictures src={img1}></Pictures>
                <Row>
                    <Column>
                        <Pictures src={img2}></Pictures>
                        <Pictures src={img4}></Pictures>

                    </Column>
                    <Column>
                        <Pictures src={img3}></Pictures>
                        <Pictures src={img5}></Pictures>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Pictures src={img6}></Pictures>
                        <Pictures src={img8}></Pictures>

                    </Column>
                    <Column>
                        <Pictures src={img7}></Pictures>
                    </Column>
                </Row>

            </ImageContainer>
        </Container>
    );
}

export default Moments;
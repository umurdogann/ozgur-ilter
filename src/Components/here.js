import styled from "styled-components";
import img1 from '../images/here/1.png';
import img2 from '../images/here/2.png';
import img3 from '../images/here/3.png';
import img4 from '../images/here/4.png';

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


const Here = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
                Here and There
            </Title>
            <Content>
                <TextRow>
                    Here and There expresses the present moment in a journey that stands between the past and<br />
                    the future, symbolizing the state of in-betweenness. The series depicts scenes of rather faraway<br />
                    places that we override on our way to certain destinations. Scenes that we usually do not pay<br />
                    attention to because we have no meaning attached to them.<br />
                    <br />
                    The visual snippets of these places entice a swift connection that produces feelings of<br />
                    attachment, making these unintentional moments of connectedness unique, memorable, and<br />
                    enjoyable.<br />
                    <br />
                    The visual shifting and sliding of the images tell a story of how we cling to places here and there<br />
                    and moments to - in the bigger picture – forget how temporary everything is.<br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                    Series consists of 3 photographs 5184x3486 px, digital
                </TextRow>
            </Content>
            <ImageContainer>
                <Pictures src={img1}></Pictures>
                <Row>
                    <Column>
                        <Pictures src={img2}></Pictures>

                    </Column>
                    <Column>
                        <Pictures src={img3}></Pictures>

                    </Column>
                </Row>
                <Pictures src={img4}></Pictures>

            </ImageContainer>
        </Container>
    );
}

export default Here;
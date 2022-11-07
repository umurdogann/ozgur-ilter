import styled from "styled-components";
import img1 from '../images/old-normal/1.png';
import img2 from '../images/old-normal/2.png';
import img3 from '../images/old-normal/3.png';
import img4 from '../images/old-normal/4.png';

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


const OldNormal = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
                The Old Normal
            </Title>
            <Content>
                <TextRow>
                    This series of images were highlighted ten years after being captured to show the<br />
                    transformations that took place in what it means to be social. The series was born coincidentally,<br />
                    at a time when social media was only in the process of entering our lives. The images were not<br />
                    intended to tackle particular topics but to show memories of a random social day. Nowadays,<br />
                    everyone is debating about the impact of social media on our views, lifestyles, and perceptions<br />
                    of the world, and how it directs our growth and openness, but on the other hand, how it<br />
                    controls and misleads us. Whether we like it or not, social media is here to stay. But the<br />
                    questions that still linger are:<br />
                    <br />
                    How come creating memories become new posts?<br />
                    <br />
                    Are we our true selves when creating memories or stories?<br />
                    <br />
                    Why would humans as social beings substitute real intimacy with visual presence?<br />
                    <br />
                    To this end, there is covert pressure on individuals to show off their daily routines, what they eat,<br />
                    who they meet, or where they go. Those who do not comply with this new era may feel left out<br />
                    and not adaptable enough.<br />
                    <br />
                    The Old Normal is a series of photographs that depicts an ordinary day of a young individual<br />
                    living the moment with no ambitions to be seen by hundreds or thousands of people. The<br />
                    pictures were saved in a memory box to reflect particular moments the old normal full of joyful<br />
                    emotions and recklessness.<br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                Series consists of 26 analog photographs 10x15 cm, C-type print
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

export default OldNormal;
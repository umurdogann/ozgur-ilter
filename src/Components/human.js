import styled from "styled-components";
import img1 from '../images/human/1.png';

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


const Human = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
                Are We Human?
            </Title>
            <Content>
                <TextRow>
                    Are We Human? is an experimental installation work named after the theme of the 3rd Istanbul<br />
                    Design Biennial, in which it was exhibited. The installation itself has a sarcastic expression,<br />
                    showing a horse portrait at the center of a blank canvas. The portrait is covered by red acetate<br />
                    paper that horizontally hung on the eyes, illustrating symbols taken from ancient civilizations<br />
                    located in the old Anatolian region to reflect the issue of women commodification.<br />
                    <br />
                    Choosing to put blinders on the horse eyes is a way to demonstrate an old Turkish saying that<br />
                    shows how objectifying women is a cause the society is blind to.<br />
                    <br />
                    The installation was placed as a one piece of work with a note asking visitors to fill the canvas<br />
                    with their interpretations of the topic through their drawings or writings. By the involvement of<br />
                    the audience, the outcomes were notably intriguing. Participants wrote passages from poems,<br />
                    quotations, slacker sentences, attributions, and slogans about women’s rights and sexual<br />
                    orientations in various languages, and they drew caricatures, religious symbols, obscene memes.<br />
                    <br />
                    The work of art takes its final form with experimental and interactive participation in which the<br />
                    viewer’s interpretive, semantic, and inferential perceptions were on display.<br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                    2016 3rd International Design Biennale, Are We Human? ITU, Istanbul, TR<br />
                    <br />
                    Installation consists of 30x30 cm watercolour illustration centered on 100x200 cm canvas
                </TextRow>
            </Content>
            <ImageContainer>
                <Pictures src={img1}></Pictures>

            </ImageContainer>
        </Container>
    );
}

export default Human;
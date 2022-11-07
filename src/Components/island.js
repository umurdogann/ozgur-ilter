import styled from "styled-components";
import img1 from '../images/island/1.png';

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


const Island = (props) => {
    let imgs = [];
    return (
        <Container>
            <Title>
                Ada Kalmasın Sensiz / Don’t Leave the Island Without You
            </Title>
            <Content>
                <TextRow>
                    Don’t Leave the Island Without You (originally Ada Kalmasin Sensiz) is a short bio-pic video<br />
                    tackling the life story of Tugrul Cakar, a successful Turkish photographer and writer who<br />
                    depicted social issues and acculturation difficulties in Turkey through his works.<br />
                    <br />
                    The video shows an interview with him focusing on social transformation, while narrating some<br />
                    quotes from his published essays in which he criticized social issues, and how he reflected them<br />
                    in his photography works, also visualizes the studio that he used to keep his artworks, awards,<br />
                    and collections.<br />
                    <br />
                    The place, which he named Shelter (Siginak), was his haven until he passed away before having<br />
                    the chance to see the final version of the project. The video was named after an old Turkish song<br />
                    that Cakar felt very attached to.<br />
                    <br />
                </TextRow>
                <TextRow opacity={`0.5`}>
                    Bio-pic, 8’ 44’’
                </TextRow>
            </Content>
            <ImageContainer>
                <Pictures src={img1}></Pictures>

            </ImageContainer>
        </Container>
    );
}

export default Island;
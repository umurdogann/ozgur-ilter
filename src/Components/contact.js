import styled from "styled-components";
import OzgurPhoto from '../images/ozgur-ilter.png';
const Container = styled.div`
display:flex;
flex-direction : row;
align-items:flex-start;
justify-content: space-between;
margin-top:200px;
`;
const Column = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:flex-start;
`;
const Title = styled.h3`
display: inline;
margin: 0;
padding: 0;
font-family: 'Arsenal';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 33px;
`;
const Text = styled.p`
display: inline;
margin: 0;
padding: 0;
font-family: 'Arsenal';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 33px;
`;

const Contact = (props) => {
    return (
        <>
            <Container>
                <Column>
                    <Text>
                        <strong>/ E-mail:</strong> o_ilter@yahoo.com.tr<br />
                        <br />
                        <strong>/ Behance:</strong> shutterbuga<br />
                        <br />
                        <strong>/ LinkedIn:</strong> ozgur-ilter<br />
                        <br />
                        <strong>/ Instagram:</strong> shutterbuga<br />
                        <br />
                        <br /><br />
                        For proposals and collaboration inquiries, please get in touch. More samples of my work are<br />
                        available upon request.
                    </Text>
                </Column>
            </Container>
        </>
    )
}
export default Contact;
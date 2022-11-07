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
margin: 0;
padding: 0;
font-family: 'Arsenal';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 33px;
`;
const Text = styled.p`
margin: 0;
padding: 0;
font-family: 'Arsenal';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 33px;
`;
const Photo = styled.img`
width: 385px;
height: 384px;
border:none;
outline:none;
`;

const About = (props) => {
    return (
        <>
            <Container>
                <Column>
                    <Title>/ Bio</Title>
                    <br />
                    <Text>
                        Özgür Ilter is a Turkish visual artist and designer, born in Ankara in 1993, currently based in<br />
                        Budapest. Her recent works mainly tackle the changing dynamics in individuals’ perceptions<br />
                        inspired by her own standing as a non-local living in a foreign country. She is interested in framing<br />
                        these inspirational topics with cultural, sociological, and anthropological aspects concerning her<br />
                        journey, life experiences, and experiments.<br />
                        <br />
                        For this purpose, she approaches the interactions between individuals, environments, and places<br />
                        to develop a deeper understanding of the rather complicated relationship between people and their<br />
                        immediate surroundings.<br />
                        <br />
                        Ilter works with photography, illustration, and moving images as approaches to depict her vision<br />
                        of such interactions. Both her research and artistic work are parts of her ongoing practice-based<br />
                        doctorate at the Hungarian University of Fine Arts.<br />
                        <br />
                    </Text>
                    <Title>
                        / Education
                    </Title>
                    <Text>
                        <br />
                        2020 –<br />
                        Doctorate in Liberal Arts (Practice-based PhD)<br />
                        Hungarian University of Fine Arts, Budapest, HU<br />
                        Supervisor: Dr. habil. Szabolcs Kisspál DLA<br />
                        <br />
                        2017 – 2019<br />
                        Master’s Degree in Graphic Design<br />
                        Budapest Metropolitan University, Budapest, HU<br />
                        Supervisor: Prof. Zoltán Csordás<br />
                        GPA: 4.35 / 5.00<br />
                        <br />
                        2012 – 2017<br />
                        Bachelor’s Degree in Graphic Design<br />
                        Başkent University, Ankara, TR<br />
                        Supervisor: Halime Fişenk Türkkan<br />
                        GPA: 3.83/4.00<br />
                        <br />
                        2013 – 2015<br />
                        Associate’s Degree in Photography and Camera Operation<br />
                        Anadolu University, Eskişehir, TR<br />
                        <br />
                        2008 – 2012<br />
                        Ankara Anatolian Fine Arts High School, Ankara, TR<br />
                        <br />
                    </Text>
                    <Title>
                        / Work
                    </Title>
                    <Text>
                        <br/>
                        2020 – 2022<br />
                        Teaching Assistant<br />
                        Hungarian University of Fine Arts, Budapest, HU<br />
                        <br />
                        2020 – 2022<br />
                        Admission Committee Member<br />
                        Hungarian University of Fine Arts, Budapest, HU<br />
                        <br />
                        2012 – 2017 - Drawing Instructor<br />
                        Fine Arts Studio of Cahit Malcok, Ankara, TR<br />
                        <br />
                        2016 - Graphic Design Intern<br />
                        Turkish Radio and Television Cooperation (TRT)<br />
                        Radio and External Services Department, Ankara, TR<br />
                        <br />
                        2015 - Archaeological Excavation Artist & Photographer<br />
                        Ministry of Culture of Turkey, Caunos (Greek) Region, TR<br />
                        <br />
                        2015 - Printing House Intern<br />
                        Eflal Printing House, Ankara, TR<br />
                        <br />
                        2014 - Post Production, Respect to the Masters<br />
                        1st International Interior Architecture Symposium<br />
                        Hacettepe University, Ankara, TR<br />
                        <br />
                    </Text>
                    <Title>
                    / Exhibitions
                    </Title>
                    <Text>
                    <br />
                    2022 Open Contest Exhibition, A-Place: Mapping, Plaza de la Cultura, Barcelona, SP<br />
                    2022 Group Exhibition, The Great Sturgeons Turn, Fészek Artist’s Club, Budapest, HU<br />
                    2022 Group Exhibition, Parallel Hungary II, MKE Profil Gallery, Budapest, HU<br />
                    2021 Artist Book Fair, 1. KHB Buchmesse, Kunsthalle Below Studios, Berlin, DE<br />
                    2019 Group Exhibition, METU Diploma, A38 Gallery, Budapest, HU<br />
                    2017 7th International Student Triennal, Yes to Art! Marmara University, Istanbul, TR<br />
                    2016 3rd International Design Biennale, Are We Human? ITU, Istanbul, TR<br />
                    2016 Group Exhibition, Ideal, Baskent University, Ankara, TR<br />
                    2015 Group Exhibition, Modern Art Interpretations II, Baskent University, Ankara, TR<br />
                    2014 Group Exhibition, Modern Art Interpretations I, Baskent University, Ankara, TR<br />
                    <br />
                    </Text>
                    <Title>
                    / Grants and Awards
                    </Title>
                    <Text>
                    <br />
                    2020 Stipendium Hungaricum Scholarship for Doctoral Education, Tempus Foundation, HU<br />
                    2014 Exhibition Award, 4th PonArt Basic Design Competition, TR<br />
                    2012 Full-Scholarship for Bachelor’s Education, Başkent University, TR<br />
                    2009 Exhibition Award, 31st International Fine Arts Competition, Museum Okręgowe w Toruniu, PL<br />
                    2005 Honorable Mention, MonAmi Painting Contest, TR<br />
                    <br />
                    </Text>
                    <Title>
                    / Publications
                    </Title>
                    <Text>
                    <br />
                    (2015). Andrei Tarkovsky and His Cinema, Bellek (5), 37-38<br />
                    (2015). On Bernini, Laodikeia (10), 18-24
                    </Text>
                    
                </Column>
                <Column>
                <br/>
                <br/>
                <Photo src={OzgurPhoto}/>
                </Column>
            </Container>
        </>
    )
}
export default About;
import styled from 'styled-components';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import Replace from "./replace";
import Obscurity from "./obscurity";
import Asthma from "./asthma";
import Island from "./island";
import Human from "./human";
import Here from "./here";
import OldNormal from "./old-normal";
import Moments from "./moments";
import { useState } from "react";

const Container = styled.div`
width:100%;
display:flex;
flex-direction: row;
gap: 44px;
flex-wrap : wrap;
margin-top:125px;
align-items:center;
justify-content: space-between;

`;

const Img = styled.img`
width: 48.8%;
cursor: pointer;
filter : grayscale(1.5);
transition: .2s ease-in-out;
&:hover{
    filter: grayscale(0);
    transform: scale(1.005);
    
}

`;

const MainPage = (props) => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8]
    let works = [Replace, Obscurity, Asthma, Island, Human, Here, OldNormal, Moments]
    let [workIndex, setWorkIndex] = useState(-1);
    let Comp = Replace;
    const onclickImage = (index) => {
        setWorkIndex(index);
        Comp = works[index];
    }
    return (

        <>
            {(workIndex === -1) ?
                <Container>{
                    images.map((image, index) => {
                        return <Img src={image} key={index} onClick={() => onclickImage(index)} />
                    })
                }

                </Container>
                :
                <Comp/>
            }



        </>
    )
}
export default MainPage;
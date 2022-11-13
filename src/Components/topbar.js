import {  useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
width:100%;
display:flex;
flex-direction: column;
`;

const Navigation = styled.div`
width: 100%;
display: flex;
flex-direction : row;
gap: 50px;
align-items: center;
`;

const Navbar = styled.div`
display: flex;
flex-direction : row;
gap: 20px;

`;


const Title = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 44px;
line-height: 58px;
color: #000000;
cursor: pointer;
`;

const NavItem = styled.div`
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 34px;
opacity: ${props => props.selected ? '1' : '0.5'};
text-transform: capitalize;
padding-right: 2px;
border-bottom : ${props => props.selected ? '2px solid black' : 'none'};
cursor : pointer;
&:hover{
    transform: scale(1.03);
}
`;

const ArrowBar = styled.div`
width:100%;
display: flex;
flex-direction: row;
align-items:center;
justify-content: ${props => props.alignRight ? 'flex-end' : 'space-between'};

`
const Arrow = styled.span`
font-family: 'Arsenal';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 63px;
color: #000000;
cursor: pointer;

&:hover{
    transform: scale(1.1);

}

`;

const Topbar = (props) => {
    const pages = ['work', 'about', 'contact'];
    const [selectedPage, setSelectedPage] = useState('work');
    const [params,setParams] = useSearchParams();
    const workIndex= parseInt(params.get('w'));
    const navigate = useNavigate();
    
    const navigateWork = (val) =>{
        navigate(`/work/${props.works[workIndex+ val]}?w=${workIndex+ val}`)
    }
    return (
        <Container>

            <Navigation>
                {(selectedPage === 'work') && <Title onClick={()=>{navigate('/')}}>
                    Özgür İlter
                </Title>}
                <Navbar>
                    {pages.map((page, index) => {
                        return <NavItem key={index} selected={selectedPage === page} onClick={() => {
                            setSelectedPage(page);
                            navigate(`/${page}`);
                        }}>{page}</NavItem>
                    })}
                </Navbar>

            </Navigation>
            <ArrowBar alignRight={workIndex === 0}>
                {workIndex - 1 >= 0 && <Arrow onClick={()=>navigateWork(-1)}>◄</Arrow>}
                {workIndex + 1 < props.works.length && <Arrow onClick={()=>navigateWork(1)}>►</Arrow>}
            </ArrowBar>
        </Container>
    );
}

export default Topbar;
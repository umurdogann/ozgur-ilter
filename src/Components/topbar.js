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
    return (
        <Container>

            <Navigation>
                {(props.showName) && <Title>
                    Ozgur Ilter
                </Title>}
                <Navbar>
                    {pages.map((page, index) => {
                        return <NavItem key={index} selected={props.selectedPage === page } onClick={()=>{
                            props.setSelectedPage(page);
                        }}>{page}</NavItem>
                    })}
                </Navbar>

            </Navigation>
            <ArrowBar alignRight={!props.leftArrow && props.rightArrow}>
                {props.leftArrow && <Arrow onClick={props.leftArrow}>◄</Arrow>}
                {props.rightArrow && <Arrow onClick={props.rightArrow}>►</Arrow>}
            </ArrowBar>
        </Container>
    );
}

export default Topbar;
import React from 'react'
import styled from 'styled-components';
import MLogo from '../img/mlogo.png'
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    background: transparent;
    display: flex;
    z-index: 999;
    @media only screen and (max-width:1270px){
        background-color: #555;
        margin-bottom: 10px;
    };
`;

const Wrapper = styled.div`
    width: 80%;
    max-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10%;
    @media only screen and (max-width:1270px){
        width: 100%;
        max-height: 50px;
    };
`;

const NavbarLeft = styled.div``;

const Image = styled.img`
    height: 60px;
    @media only screen and (max-width:1270px){
        height: 40px;
    };
`;

const NavbarRight = styled.div``;

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ListItem = styled.li`
    padding: 20px;
    font-size: 20px;
    font-weight: bolder;
    border-bottom: white solid 3px;
    color: white;
    cursor: pointer;
    &:hover {
        color: dodgerblue;
        border-bottom: dodgerblue solid 3px;
    };
    @media only screen and (max-width:1270px){
        border-bottom: #555 solid 3px;
        padding: 10px;
    };
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <NavbarLeft><Image src={MLogo} /></NavbarLeft>
                <NavbarRight>
                    <List>
                        <Link to="/"><ListItem>HOME</ListItem></Link>
                        <Link to="/MTwo"><ListItem>M2</ListItem></Link>
                        <Link to="/MThree"><ListItem>M3</ListItem></Link>
                        <Link to="/MFour"><ListItem>M4</ListItem></Link>
                        <Link to="/MFive"><ListItem>M5</ListItem></Link>
                    </List>
                </NavbarRight>
            </Wrapper>
        </Container>
    )
}

export default Navbar

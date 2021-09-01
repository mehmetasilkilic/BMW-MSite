import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Container = styled.div`
    background-color: #eee;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 50px;
    @media only screen and (max-width:700px){
        display: none;
    };
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: white solid 3px;
    height: 40px;
`;

const ListItem = styled.li`
    color: #1f1f1f;
    font-size: 18px;
    padding: 12px 20px;
    border-bottom: transparent solid 3px;
    cursor: pointer;
    &:hover{
        border-bottom: dodgerblue solid 3px;
    }
`;

const Midbar = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <Link to="/Highlights"><ListItem>Highlights</ListItem></Link>
                    <Link to="/News"><ListItem>News</ListItem></Link>
                    <Link to="/Fup"><ListItem>Frequently used pages</ListItem></Link>
                    <Link to="/Contact"><ListItem>Contact</ListItem></Link>
                </List>
            </Wrapper>
        </Container>
    )
}

export default Midbar

import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 100%;
    height: 350px;
    background-color: #eeeeee;
    margin-top: 20px;
    position: relative;
`;

const Social = styled.div``;

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14%;
    font-size: 30px;
    position: absolute;
    right: 10%;
    top: 10%;
`;

const ListItem = styled.li`
    color: #1f1f1f;
    opacity: 1;
    transition: opacity 0.4s;
    cursor: pointer;
    &:hover{
        color: #1f1f1f;
        opacity: 0.8;
    }
`;

const Title = styled.h2`
    position: absolute;
    top: 25%;
    left: 10%;
    color: #1f1f1f;
    transform: translateX(0%);
`;

const Contact = styled.div`
    display: flex;
    position: absolute;
    top: 40%;
    left: 10%;
`;

const ListTwo = styled.ul`
`;

const ListItemTwo = styled.li`
    color: #1f1f1f;
    opacity: 1;
    transition: all 0.4s;
    cursor: pointer;
    &:hover{
        color: #1f1f1f;
        opacity: 0.8;
    }
`;

const TitleTwo = styled.h2`
    position: absolute;
    top: 25%;
    left: 30%;
    color: #1f1f1f;
    transform: translateX(0%);
    margin-left: 150px;
`;

const Menu = styled.div`
    display: flex;
    position: absolute;
    top: 40%;
    left: 30%;
`;

const ListThree = styled.ul`
    margin-left: 150px;
`;

const ListItemThree = styled.li`
    color: #1f1f1f;
    opacity: 1;
    transition: all 0.4s;
    cursor: pointer;
    &:hover{
        color: #1f1f1f;
        opacity: 0.8;
    }
`;

const Rights = styled.div`
    position: absolute;
    left: 10%;
    bottom: 5%;
    color: #1f1f1f;
`;

const Desc = styled.p``;

const Footer = () => {
    return (
        <Container>
            <Social>
                <List>
                    <ListItem><Facebook /></ListItem>
                    <ListItem><Instagram /></ListItem>
                    <ListItem><Twitter /></ListItem>
                    <ListItem><YouTube /></ListItem>
                </List>
            </Social>
            <Title>Contact</Title>
            <Contact>
                <ListTwo>
                    <ListItemTwo>Test Drive</ListItemTwo>
                    <ListItemTwo>Service Appointment Request</ListItemTwo>
                    <ListItemTwo>Dealers and Services</ListItemTwo>
                    <ListItemTwo>E-magazine</ListItemTwo>
                    <ListItemTwo>Contact Form</ListItemTwo>
                    <ListItemTwo>We Are Always Here</ListItemTwo>
                </ListTwo>
            </Contact>
            <TitleTwo>BMW World</TitleTwo>
            <Menu>
                <ListThree>
                    <ListItemThree>Find Your BMW</ListItemThree>
                    <ListItemThree>My BMW</ListItemThree>
                    <ListItemThree>BMW Lifestyle Shop</ListItemThree>
                    <ListItemThree>BMW Motorrad Türkiye</ListItemThree>
                </ListThree>
            </Menu>
            <Rights>
                <Desc>© BMW M 2021 | All Rights Reserved</Desc>
            </Rights>
        </Container>
    )
}

export default Footer

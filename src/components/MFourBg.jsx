import React from 'react'
import styled from 'styled-components';
import BGM from '../img/m4banner.jpg'

const Container = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.14), rgb(0, 0, 0)), url(${BGM});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    position: relative;
    @media only screen and (max-width:1270px){
        display: none;
    };
`;

const Span = styled.span`
    position: absolute;
    bottom: 20px;
    right: 308px;
    display: block;
    color: white;
    font-size: 40px;
`;

const MThreeBg = () => {
    return (
        <Container>
            <Span>MODEL ATHLETE.</Span>
        </Container>
    )
}

export default MThreeBg
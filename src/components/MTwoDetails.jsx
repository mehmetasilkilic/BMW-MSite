import React from 'react'
import styled from 'styled-components'
import Engine from '../img/engine.jpg'
import Brake from '../img/brake.jpg'
import Exhaust from '../img/exh.jpg'
import Differential from '../img/diff.jpg'

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    justify-content: space-between;
    margin-top: 20px;
    @media only screen and (max-width:1000px){
        width: 100%;
        margin-left: 0;
    };
`;

const WrapperOut = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width:1270px){
        flex-wrap: wrap;
    };
`;

const HeadTitle = styled.h2`
    
`;

const Wrapper = styled.div`
    width: 24%;
    height: 500px;
    display: block;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    @media only screen and (max-width:1270px){
        width: 48%;
    };
    @media only screen and (max-width:700px){
        width: 100%;
    };
`;

const Image = styled.img`
    height: 100%;
    transition: all 0.4s;
    &:hover{
        transform: scale(1.1);
    }
`;

const Title = styled.h5`
    padding-left: 3%;
    font-size: 60px;
    color: white;
    position: absolute;
    bottom: 17%;
    left: 5%;
`;
const Desc = styled.p`
    padding-left: 3%;
    font-size: 24px;
    color: white;
    position: absolute;
    bottom: 5%;
    left: 5%;
`;

const MTwoDetails = () => {
    return (
        <Container>
            <HeadTitle>BMW M2 HIGHLIGHTS</HeadTitle>
            <WrapperOut>
                <Wrapper>
                    <Image src={Engine} />
                    <Title>01</Title>
                    <Desc>Straight 6 Engine</Desc>
                </Wrapper>
                <Wrapper>
                    <Image src={Brake} />
                    <Title>02</Title>
                    <Desc>M Performance Brakes</Desc>
                </Wrapper>
                <Wrapper>
                    <Image src={Exhaust} />
                    <Title>03</Title>
                    <Desc>M Performance Exhaust</Desc>
                </Wrapper>
                <Wrapper>
                    <Image src={Differential} />
                    <Title>04</Title>
                    <Desc>Active M differential</Desc>
                </Wrapper>
            </WrapperOut>
        </Container>
    )
}

export default MTwoDetails

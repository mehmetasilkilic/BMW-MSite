import React from 'react'
import styled from 'styled-components'
import CA from '../img/m3-c1.jpg'
import CB from '../img/m3-c2.jpg'

const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:1000px){
        width: 100%;
        margin-left: 0;
    };
`;

const Wrapper = styled.div`
    display: flex;
    margin-top: 20px;
    @media only screen and (max-width:1000px){
        flex-direction: column;
    };
`;

const Image = styled.img`
    width: 50%;
    @media only screen and (max-width:1000px){
        width: 100%;
    };
`;

const WrapperIn = styled.div`
    width: 50%;
    margin-left: 20px;
    @media only screen and (max-width:1000px){
        width: 100%;
    };
`;

const Title = styled.h3`
    color: #1f1f1f;
    font-size: 24px;
    @media only screen and (max-width:1000px){
        font-size: 20px;
    };
`;

const Desc = styled.p`
    color: #1f1f1f;
    font-size: 20px;
    @media only screen and (max-width:1000px){
        font-size: 16px;
    };
`;

const MThreeCard = () => {
    return (
        <Container>
            <Wrapper>
                <Image src={CA} />
                <WrapperIn>
                    <Title>
                        MAKE A STRONG STATEMENT
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Desc>
                </WrapperIn>
            </Wrapper>
            <Wrapper>
                <Image src={CB} />
                <WrapperIn>
                    <Title>
                        EXCLUSIVE DESIGN
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Desc>
                </WrapperIn>
            </Wrapper>
        </Container>
    )
}

export default MThreeCard

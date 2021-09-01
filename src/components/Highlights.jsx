import React from 'react'
import styled from 'styled-components'
import MTwo from '../img/m2banner.jpg'
import MThree from '../img/m3-2.jpg'
import MFour from '../img/m4banner.jpg'
import MFive from '../img/m5banner.jpg'

const Container = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    flex-wrap: wrap;
    @media only screen and (max-width:700px){
        flex-wrap: nowrap;
        flex-direction: column;
    };
`;

const New = styled.div`
    width: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    @media only screen and (max-width:700px){
        width: 100%;
    };
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    &:hover{
        transform: scale(1.1);
    }
`;

const Title = styled.p`
    position: absolute;
    display: block;
    top: 5%;
    left: 5%;
    color: white;
    font-size: 24px;
    font-weight: bolder;
    z-index: 1;
    @media only screen and (max-width:1270px){
        font-size: 20px;
    };
    @media only screen and (max-width:700px){
        font-size: 16px;
    };
`;

const Highlights = () => {
    return (
        <Container>
            <New>
                <Image src={MTwo} />
                <Title>
                    NEW BMW M2
                </Title>
            </New>
            <New>
                <Image src={MThree} />
                <Title>
                    NEW BMW M3
                </Title>
            </New>
            <New>
                <Image src={MFour} />
                <Title>
                    NEW BMW M4
                </Title>
            </New>
            <New>
                <Image src={MFive} />
                <Title>
                    NEW BMW M5
                </Title>
            </New>
        </Container>
    )
}

export default Highlights

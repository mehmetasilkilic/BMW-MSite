import React from 'react'
import styled from 'styled-components'
import Test from '../img/test.jpg'
import Biz from '../img/biz.jpg'
import Sozluk from '../img/sozluk.jpg'
import Katalog from '../img/katalog.jpg'

const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width:1270px){
        width: 100%;
        margin-left: 0;
    };
    @media only screen and (max-width:700px){
        flex-wrap: wrap;
    };
`;

const MiniCard = styled.div`
    width: 24%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: #b1b1b1 solid 1px;
    padding-bottom: 10px;
    @media only screen and (max-width:700px){
        width: 48%;
        margin-bottom: 10px;
    };
`;

const Image = styled.img`
    padding: 10px 10px 0 10px;
`;

const Title = styled.h2`
    padding: 10px 10px 0 10px;
    color: #1f1f1f;
    font-size: 24px;
    @media only screen and (max-width:1000px){
        font-size: 20px;
    }
`;

const Desc = styled.p`
    padding: 10px;
    color: #1f1f1f;
    font-size: 20px;
    @media only screen and (max-width:1000px){
        font-size: 16px;
    }
`;

const More = styled.a`
    margin-left: 10px;
    color: #1f1f1f;
    font-weight: bolder;
    border-bottom: white solid 3px;
    width: 60%;
    cursor: pointer;
    font-size: 20px;
    &:hover{
        border-bottom: dodgerblue solid 3px;
    }
    @media only screen and (max-width:1000px){
        font-size: 16px;
    }
`;

const NewsTwo = () => {
    return (
        <Container>
            <MiniCard>
                <Image src={Test} />
                <Title>TEST DRIVE</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</Desc>
                <More>Read more...</More>
            </MiniCard>
            <MiniCard>
                <Image src={Biz} />
                <Title>BUSINESS PARTNERS</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</Desc>
                <More>Read more...</More>
            </MiniCard>
            <MiniCard>
                <Image src={Sozluk} />
                <Title>BMW DICTIONARY</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</Desc>
                <More>Read more...</More>
            </MiniCard>
            <MiniCard>
                <Image src={Katalog} />
                <Title>CATALOGS</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</Desc>
                <More>Read more...</More>
            </MiniCard>
        </Container>
    )
}

export default NewsTwo

import React from 'react'
import styled from 'styled-components'
import CA from '../img/m5banner.jpg'


const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:1270px){
        width: 100%;
        margin-left: 0;
    };
`;

const HeadTitle = styled.h3`
    margin-top: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    @media only screen and (max-width:1000px){
        flex-direction: column;
    };
`;

const Image = styled.img`
    width: 50%;
    @media only screen and (max-width:1000px){
        width: 80%;
    };
`;

const WrapperIn = styled.div`
    width: 50%;
    margin-left: 20px;
    @media only screen and (max-width:1000px){
        width: 80%;
        margin-left: 0;
    };
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
`;

const RowLeft = styled.p`
    font-size: 16px;
`;

const RowRight = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const MThreeCard = () => {
    return (
        <Container>
            <HeadTitle>M5 Technical Details</HeadTitle>
            <Wrapper>
                <Image src={CA} />
                <WrapperIn>
                   <Row>
                       <RowLeft>1/60sec engine power,hp</RowLeft>
                       <RowRight>635/6000</RowRight>
                   </Row>
                   <hr />
                   <Row>
                       <RowLeft>1/60sec max torque</RowLeft>
                       <RowRight>750/1800-5950</RowRight>
                   </Row>
                   <hr />
                   <Row>
                       <RowLeft>0-100 km/h</RowLeft>
                       <RowRight>3,0 sec</RowRight>
                   </Row>
                   <hr />
                   <Row>
                       <RowLeft>Average Fuel Consumption</RowLeft>
                       <RowRight>11,3-11,1</RowRight>
                   </Row>
                </WrapperIn>
            </Wrapper>
        </Container>
    )
}

export default MThreeCard
import { Description, ListAlt, Videocam } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 250px;
    background-color: #eeeeee;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width:1000px){
        flex-direction: column;
        height: 400px;
    };
`;

const Wrapper = styled.div`
    width: 60%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width:1000px){
        flex-direction: column;
        width: 100%;
        height: 400px;
    };
`;

const Title = styled.h3`
    color: #1f1f1f;
    font-size: 20px;
    font-weight: bolder;
    padding: 20px;
`;

const Page = styled.div`
    width: 33%;
    max-height: 250px;
    border-left: white solid 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    padding: 10px 0;
    @media only screen and (max-width:1000px){
        border-left: none;
        border-bottom: white solid 5px;
        width: 100%;
    };
`;

const Button = styled.h4`
    color: #1f1f1f;
    cursor: pointer;
    margin-top: 20px;
    border: #1f1f1f solid 2px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bolder;
    opacity: 0.7;
    transition: all 0.4s;
    &:hover{
        opacity: 1;
    };
`;

const Fup = () => {
    return (
        <Container>
            <Title>Frequently used pages</Title>
            <Wrapper>
                <Page>
                    <Description />
                    <Button>Price List</Button>
                </Page>
                <Page>
                    <ListAlt />
                    <Button>Special Offers</Button>
                </Page>
                <Page>
                    <Videocam />
                    <Button>BMW Video Chat</Button>
                </Page>
            </Wrapper>
        </Container>
    )
}

export default Fup


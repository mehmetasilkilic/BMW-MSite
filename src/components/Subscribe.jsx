import React from 'react'
import styled from 'styled-components'
import BGS from '../img/m2banner.jpg'

const Container = styled.div`
    margin-top: 20px;
    height: 25vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url(${BGS});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 60%;
    @media only screen and (max-width:1000px){
        width: 80%;
    }
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 60%;
    height: 5vh;
    margin: 0;
    color: white;
    font-size: 16px;
    padding-left: 20px;
    border: #005dd0 solid 1px;
    outline: none;
    background: none;
`;

const Button = styled.button`
    width: 30%;
    margin: 0;
    padding: 15px 0;
    background-color: #005dd0;
    border: none;
    color: #fff;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
    &:active{
        color: #005dd0;
        background-color: #fff;
    }
`;

const Subscribe = () => {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Input
                        type="email"
                        placeholder="@SUBSCRIBE TO M SPORT NEWS"
                    />
                    <Button
                        type="submit"
                        value="SUBSCRIBE"
                    >
                        SUBSCRIBE
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Subscribe

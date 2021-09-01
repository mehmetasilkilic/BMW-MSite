import React from 'react'
import styled from 'styled-components';
import BGS from '../img/m4-1.jpg'

const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url(${BGS});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    width: 60%;
    margin-top: 20px;
    @media only screen and (max-width:1000px){
        width: 80%
    };
`;

const Title = styled.h4`
    color: #eee;
`;

const WrapperP = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    @media only screen and (max-width:1000px){
        flex-direction: column;
    };
`;

const WrapperC = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    @media only screen and (max-width:1000px){
        flex-direction: column;
    };
`;

const WrapperM = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0;
`;

const WrapperIn = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:1000px){
        width: 100%;
    };
`;

const Label = styled.label`
    color: #eee;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px 0;
    margin: 0;
    color: white;
    font-size: 16px;
    border: #005dd0 solid 1px;
    outline: none;
    background: none;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 30vh;
    margin: 20px 0;
    color: white;
    font-size: 16px;
    border: #005dd0 solid 1px;
    outline: none;
    background: none;
`;
const Button = styled.button`
    width: 30%;
    margin-bottom: 20px;
    background-color: #005dd0;
    border: #005dd0 solid 16px;
    color: #fff;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
    &:active{
        color: #005dd0;
        border: #fff solid 16px;
        background-color: #fff;
    }
`;

const Contact = () => {
    return (
        <Container>
            <Form>
                <Title>
                    Personal Info
                </Title>
                <WrapperP>
                    <WrapperIn>
                        <Label>
                            Name
                        </Label>
                        <Input />
                    </WrapperIn>
                    <WrapperIn>
                        <Label>
                            Surname
                        </Label>
                        <Input />
                    </WrapperIn>
                </WrapperP>
                <Title>
                    Contact Info
                </Title>
                <WrapperC>
                    <WrapperIn>
                        <Label>
                            E-mail
                        </Label>
                        <Input />
                    </WrapperIn>
                    <WrapperIn>
                        <Label>
                            Phone
                        </Label>
                        <Input />
                    </WrapperIn>
                </WrapperC>
                <Title>
                    Your Message
                </Title>
                <WrapperM>
                    <Label>
                        Subject
                    </Label>
                    <Input />
                    <Textarea placeholder="Your Message...">

                    </Textarea>
                </WrapperM>
            </Form>
            <Button>
                SEND MESSAGE
            </Button>
        </Container>
    )
}

export default Contact

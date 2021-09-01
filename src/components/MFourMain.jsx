import React from 'react'
import styled from 'styled-components';
import MFourA from '../img/m4-1.jpg';
import MFourB from '../img/m4-2.jpg';
import MFourC from '../img/m4-4.jpg';
import MFourD from '../img/m4-ic1.jpg';

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
`;

const Wrapper = styled.div`
    width: 100%;
`;

const Title = styled.h3`
    font-size: 24px;
    margin: 30px 0;
    @media only screen and (max-width:1000px){
        font-size: 20px;
    };
`;

const Image = styled.img`
    width: 100%;
`;

const Desc = styled.p`
    font-size: 20px;
    margin: 30px 0;
    @media only screen and (max-width:1000px){
        font-size: 16px;
    };
`;

const MFourMain = () => {
    return (
        <Container>
            <Wrapper>
                <Title>BMW M4 Highlights</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Desc>
                <Image src={MFourA} />
            </Wrapper><Wrapper>
                <Title>BMW M440i xDrive Highlights</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Desc>
                <Image src={MFourB} />
            </Wrapper><Wrapper>
                <Title>Make a Strong Statement</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Desc>
                <Image src={MFourC} />
            </Wrapper><Wrapper>
                <Title>Driver Cockpit and Technologies</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Desc>
                <Image src={MFourD} />
            </Wrapper>
        </Container>
    )
}

export default MFourMain

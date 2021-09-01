import React from 'react'
import styled from 'styled-components'
import Highlights from '../components/Highlights';
import HomeBg from '../components/HomeBg';
import Midbar from '../components/Midbar';
import News from '../components/News';
import NewsTwo from '../components/NewsTwo';
import Subscribe from '../components/Subscribe';

const Container = styled.div``;

const MidbarWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
`;

const Home = () => {
    return (
        <Container>
            <HomeBg />
            <MidbarWrapper>
                <Midbar />
            </MidbarWrapper>
            <Highlights />
            <News />
            <Subscribe />
            <NewsTwo />
        </Container>
    )
}

export default Home


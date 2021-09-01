import React from 'react'
import MThreeBg from '../components/MThreeBg';
import MThreeTabs from '../components/MThreeTabs';
import styled from 'styled-components'
import MThreeCard from '../components/MThreeCard';

const Container = styled.div``;

const MThree = () => {
    return (
        <Container>
            <MThreeBg />
            <MThreeTabs />
            <MThreeCard />
        </Container>
    )
}

export default MThree

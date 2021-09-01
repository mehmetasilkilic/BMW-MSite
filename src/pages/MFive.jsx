import React from 'react'
import styled from 'styled-components'
import MFiveAccordion from '../components/MFiveAccordion';
import MFiveBg from '../components/MFiveBg';
import MFiveCard from '../components/MFiveCard';

const Container = styled.div``;

const MFour = () => {
    return (
        <Container>
            <MFiveBg />
            <MFiveAccordion />
            <MFiveCard />
        </Container>
    )
}

export default MFour

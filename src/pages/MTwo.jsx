import React from 'react'
import styled from 'styled-components'
import MTwoBg from '../components/MTwoBg';
import MTwoCarousel from '../components/MTwoCarousel';
import MTwoDetails from '../components/MTwoDetails';


const Container = styled.div``;


const MTwo = () => {
    return (
        <Container>
            <MTwoBg />
            <MTwoCarousel />
            <MTwoDetails />
        </Container>
    )
}

export default MTwo
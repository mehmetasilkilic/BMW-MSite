import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import MDA from '../img/m5-d1.jpg';
import MDB from '../img/m5-d2.jpg';
import MDC from '../img/m5-d3.jpg';
import MDD from '../img/m5-d4.jpg';
import MEDA from '../img/m5-ed1.jpg';
import MEDB from '../img/m5-ed2.jpg';
import MEDC from '../img/m5-ed3.jpg';
import MEDD from '../img/m5-ed4.jpg';
import MIDA from '../img/m5-id1.jpg';
import MIDB from '../img/m5-id2.jpg';
import MIDC from '../img/m5-id3.jpg';
import MIDD from '../img/m5-id4.jpg';

const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    @media only screen and (max-width:1270px){
        width: 100%;
        margin-left: 0;
    };
`;

const HeadTitle = styled.h2`
    margin-bottom: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    @media only screen and (max-width:700px){
        flex-wrap: wrap;
    };
`;

const WrapperIn = styled.div`
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

const Title = styled.h4`
    padding: 10px 10px 0 10px;
    font-size: 24px;
    color: #1f1f1f;
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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
}));

export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            <HeadTitle>Highlights of the M5</HeadTitle>
            <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Dinamics</Typography>
                    </AccordionSummary>
                        <Typography>
                            <Wrapper>
                                <WrapperIn>
                                    <Image src={MDA} />
                                    <Title>BMW M TwinPower Turbo V8</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MDB} />
                                    <Title>A Lighter Car</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MDC} />
                                    <Title>M Carbon Ceramic Brake</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MDD} />
                                    <Title>20 Inch Light Alloy Rim</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                            </Wrapper>
                        </Typography>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>Exterior Design</Typography>
                    </AccordionSummary>
                        <Typography>
                            <Wrapper>
                                <WrapperIn>
                                    <Image src={MEDA} />
                                    <Title>BMW Laserlight</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MEDB} />
                                    <Title>M Kidney Grills</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MEDC} />
                                    <Title>M Carbon Bodykit</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MEDD} />
                                    <Title>M Carbon Spoiler</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                            </Wrapper>
                        </Typography>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Interior Design</Typography>
                    </AccordionSummary>
                        <Typography>
                            <Wrapper>
                                <WrapperIn>
                                    <Image src={MIDA} />
                                    <Title>M Carbon Pilot Seats</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MIDB} />
                                    <Title>M Light Back Seats</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MIDC} />
                                    <Title>M Steering Wheel</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                                <WrapperIn>
                                    <Image src={MIDD} />
                                    <Title>Aluminium Carbon Trims</Title>
                                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                                </WrapperIn>
                            </Wrapper>
                        </Typography>
                </Accordion>
            </div>
        </Container>
    );
}


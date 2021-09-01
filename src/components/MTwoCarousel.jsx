import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components'
import MTwoA from '../img/m2-1.jpg'
import MTwoB from '../img/m2-2.jpg'
import MTwoC from '../img/m2-3.jpg'
import MTwoD from '../img/m2-4.jpg'


const Wrapper = styled.div`
    margin: 20px 0;
    width: 80%;
    margin-left: 10%;
    @media only screen and (max-width:1270px){
        width: 100%;
        margin-left: 0;
    } 
`;

const WrapperTab = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    @media only screen and (max-width:1270px){
        height: 400px;
    };
    @media only screen and (max-width:700px){
        height: 300px;
    };
`;

const WrapperTabIn = styled.div`
    width: 100%;
    margin-top: 20px;
`;

const Title = styled.h3`
    color: #1f1f1f;
    font-size: 24px;
    @media only screen and (max-width:1000px){
        font-size: 20px;
    };
`;

const Desc = styled.p`
    color: #1f1f1f;
    font-size: 20px;
    @media only screen and (max-width:1000px){
        font-size: 16px;
    };
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Wrapper>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Engine" {...a11yProps(0)} />
                        <Tab label="Track Focused" {...a11yProps(1)} />
                        <Tab label="Interior" {...a11yProps(2)} />
                        <Tab label="Performance" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <WrapperTab>
                            <Image src={MTwoA} />
                            <WrapperTabIn>
                                <Title>
                                    TWO TURBOS. ONE GOAL
                                </Title>
                                <Desc>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Desc>
                            </WrapperTabIn>
                        </WrapperTab>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <WrapperTab>
                            <Image src={MTwoB} />
                            <WrapperTabIn>
                                <Title>
                                    TIME TO GO PRO.
                                </Title>
                                <Desc>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Desc>
                            </WrapperTabIn>
                        </WrapperTab>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <WrapperTab>
                            <Image src={MTwoC} />
                            <WrapperTabIn>
                                <Title>
                                    BEST MATCH. EVEN BETTER.
                                </Title>
                                <Desc>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Desc>
                            </WrapperTabIn>
                        </WrapperTab>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <WrapperTab>
                            <Image src={MTwoD} />
                            <WrapperTabIn>
                                <Title>
                                    POWER TO THE MAX.
                                </Title>
                                <Desc>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Desc>
                            </WrapperTabIn>
                        </WrapperTab>
                    </TabPanel>
                </SwipeableViews>
            </div>
        </Wrapper>
    );
}

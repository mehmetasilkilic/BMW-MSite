import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import MThreeA from '../img/m3-2.jpg'
import MThreeB from '../img/m3-3.jpg'
import MThreeC from '../img/m3-4.jpg'
import MThreeD from '../img/m3-5.jpg'
import MThreeE from '../img/m3-6.jpg'

const Container = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    height: 700px;
`;

const HeadTitle = styled.h2`
    margin-bottom: 20px;
`;

const WrapperTab = styled.div`
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const WrapperTabIn = styled.div`
    width: 100%;
    margin-top: 20px;
`;

const Title = styled.h3`
    color: #1f1f1f;
    font-size: 24px;
`;

const Desc = styled.p`
    color: #1f1f1f;
    font-size: 20px;
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <HeadTitle>TECHNICAL HIGHLIGHTS AT A GLANCE</HeadTitle>
            <div className={classes.root}>
                <WrapperTab>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="Adaptive M suspension" {...a11yProps(0)} />
                        <Tab label="M Carbon ceramic brake" {...a11yProps(1)} />
                        <Tab label="BMW M xDrive" {...a11yProps(2)} />
                        <Tab label="M steptronic transmission" {...a11yProps(3)} />
                        <Tab label="M braking system" {...a11yProps(4)} />
                    </Tabs>
                </WrapperTab>
                <TabPanel value={value} index={0}>
                    <Wrapper>
                        <Image src={MThreeA} />
                        <WrapperTabIn>
                            <Title>
                                Adaptive M suspension
                            </Title>
                            <Desc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Desc>
                        </WrapperTabIn>
                    </Wrapper>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Wrapper>
                        <Image src={MThreeB} />
                        <WrapperTabIn>
                            <Title>
                                M Carbon ceramic brake
                            </Title>
                            <Desc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Desc>
                        </WrapperTabIn>
                    </Wrapper>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Wrapper>
                        <Image src={MThreeC} />
                        <WrapperTabIn>
                            <Title>
                                BMW M xDrive
                            </Title>
                            <Desc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Desc>
                        </WrapperTabIn>
                    </Wrapper>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Wrapper>
                        <Image src={MThreeD} />
                        <WrapperTabIn>
                            <Title>
                                M steptronic transmission
                            </Title>
                            <Desc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Desc>
                        </WrapperTabIn>
                    </Wrapper>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Wrapper>
                        <Image src={MThreeE} />
                        <WrapperTabIn>
                            <Title>
                                M braking system
                            </Title>
                            <Desc>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Desc>
                        </WrapperTabIn>
                    </Wrapper>
                </TabPanel>
            </div>
        </Container>
    );
}

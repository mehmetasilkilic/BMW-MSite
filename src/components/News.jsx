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
import Yaz from '../img/yaz.jpg'
import Biz from '../img/biz.jpg'
import Hij from '../img/hij.jpg'
import Tem from '../img/tem.jpg'

const Wrapper = styled.div`
    margin: 20px 0;
    width: 80%;
    margin-left: 10%;
    @media only screen and (max-width:1270px){
        width: 100%;
        margin-left: 0;
    };
`;

const WrapperTab = styled.div`
    display: flex;
    @media only screen and (max-width:1000px){
        flex-direction: column;
    };
`;

const Image = styled.img`
    width: 50%;
    @media only screen and (max-width:1000px){
        width: 100%;
    };
`;

const WrapperTabIn = styled.div`
    width: 50%;
    margin-left: 20px;
    @media only screen and (max-width:1000px){
        width: 100%;
        margin-left: 0;
    }

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
                        <Tab label="Opportunities" {...a11yProps(0)} />
                        <Tab label="Customer Services" {...a11yProps(1)} />
                        <Tab label="Hygiene" {...a11yProps(2)} />
                        <Tab label="Service Experience" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <WrapperTab>
                            <Image src={Yaz} />
                            <WrapperTabIn>
                                <Title>
                                    SUMMER OPPORTUNITIES
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
                            <Image src={Biz} />
                            <WrapperTabIn>
                                <Title>
                                    WE ARE ALWAYS HERE
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
                            <Image src={Hij} />
                            <WrapperTabIn>
                                <Title>
                                    APPROVED HYGIENE
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
                            <Image src={Tem} />
                            <WrapperTabIn>
                                <Title>
                                    CONTACTLESS SERVICE EXPERIENCE
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

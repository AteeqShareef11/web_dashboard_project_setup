/* eslint-disable react/prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ data }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                <Tabs

                    sx={{

                        backgroundColor: '#fff'
                    }} // Background color for all tabs
                    indicatorColor="#343A40" // Indicator color
                    textColor="#343A40" // Text color for active ta

                    value={value} onChange={handleChange} variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {data.map((item, index) => (
                        <Tab sx={{
                            margin: "10px",
                            color: '#343A40',
                            borderRadius: "10PX",
                            maxWidth: '200px',
                            '&.Mui-selected': {
                                backgroundColor: '#343A40', // Background color for active tab
                                color: '#fff', // Text color for active tab
                            },
                            '&:hover': {
                                backgroundColor: '#343A40', // Background color for active tab
                                color: '#fff', // Text color for active tab
                            },
                        }}
                            key={index} label={item.label} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
            {data.map((item, index) => (
                <CustomTabPanel key={index} value={value} index={index}>
                    <item.Component {...(item.props || {})} />
                </CustomTabPanel>
            ))}
        </Box>
    );
}

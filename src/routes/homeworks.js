import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


function TabPanel(props) {
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

export default function Homeworks() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'white',
                    borderRadius: 1,
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="IDEF0" />
                            <Tab label="SPARQL" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <h3>So, what is it IDEF0?</h3>
                        <p>It's a function modeling methodology for describing manufacturing functions, which offers a functional modeling language for the analysis, development, reengineering and integration of information systems, business processes or software engineering analysis.</p>
                        <p>Since I am currently studying the topic of Machine Learning, let's try to draw up an IDEF0 diagram for an example project on recognizing an image. Suppose that we get two levels of decomposition, and then we get a very small scheme.</p>
                        <img src={process.env.PUBLIC_URL + '/img/A0.png'} width='90%' /><hr></hr>
                        <img src={process.env.PUBLIC_URL + '/img/Decompose A0.png'} width='90%' /><hr></hr>
                        <img src={process.env.PUBLIC_URL + '/img/Decompose A2.png'} width='90%' /><hr></hr>
                        <p>Yeah, mb they not so fancy ) but it's not so important at this stage i think. Btw don't judge a book by its cover))</p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                </Box>
            </Box>
        </div>
    )
}
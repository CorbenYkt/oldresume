import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

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
    const [code, setCode] = React.useState(
        ``
    );
    fetch("https://raw.githubusercontent.com/CorbenYkt/corbenykt.github.io/main/src/Team3KB.n3")
        .then((response) => response.text())
        .then((html) => { setCode(html); })
        .catch((error) => { console.warn(error); });

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
                <Box sx={{ width: '100%' }} style={{ textAlign: 'justify' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="SPARQL" />
                            <Tab label="IDEF0" />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={1}>
                        <div>
                            <h3>So, what is it IDEF0?</h3>
                            <p>It's a function modeling methodology for describing manufacturing functions, which offers a functional modeling language for the analysis, development, reengineering and integration of information systems, business processes or software engineering analysis.</p>
                            <p>Since I am currently studying the topic of Machine Learning, let's try to draw up an IDEF0 diagram for an example project on recognizing an image. Suppose that we get two levels of decomposition, and then we get a very small scheme.</p>
                            <img src={process.env.PUBLIC_URL + '/img/idef0-1.jpg'} width='90%' /><hr></hr>
                            <img src={process.env.PUBLIC_URL + '/img/idef0-2.jpg'} width='90%' /><hr></hr>
                            <img src={process.env.PUBLIC_URL + '/img/idef0-3.jpg'} width='90%' /><hr></hr>
                            <p>Yeah, mb they not so fancy ) but it's not so important at this stage i think. Btw don't judge a book by its cover))</p>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={0} >
                        <h3>SPARQL?</h3>
                        <p>SPARQL is the standard query language and protocol for Linked Open Data and RDF databases.
                            Having been designed to query a great variety of data, it can efficiently extract information hidden in
                            non-uniform data and stored in various formats and sources.
                            Our homework was to write Knowledgebase (KB) of previous IDEF0 scheme, and to do some query on it using SPARQL.</p>
                        <p>My KB file is located <a href='https://raw.githubusercontent.com/CorbenYkt/corbenykt.github.io/main/src/routes/IDEF0.n3'>here</a> and it totally describes my IDEF0 scheme</p>

                        <Editor
                            value={code}
                            onValueChange={code => setCode(code)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }}
                        />
                        <p>Now let's make some Python code:</p>
                        <Editor
                            value={`
import rdflib
from rdflib import *
g = rdflib.Graph()
result = g.parse("https://raw.githubusercontent.com/CorbenYkt/corbenykt.github.io/main/src/Team3KB.n3", format="text/n3")
                            
qres = g.query("""SELECT DISTINCT ?ind ?ExistingKPIs WHERE {?ind prop:hasKPI ?ExistingKPIs.}""")
for row in qres:
    print(row)
`}
                            highlight={code => highlight(code, languages.js)}
                            padding={4}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }}
                        />
                        <img src={process.env.PUBLIC_URL + '/img/rdflibresults.png'} /><hr></hr>
                        <p>As we can see code read's RDF scheme properly and outputs process labels</p>
                    </TabPanel>
                </Box>
            </Box>
        </div>
    )
}
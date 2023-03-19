import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';


export default function About() {
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
                <img src={process.env.PUBLIC_URL + '/img/me.jpg'} alt="Family" />

            </Box>
            <div>
                <p>Hey, it's me - Dmitrii Artemev, my wife Tanya and our son Gosha. I am from the city of
                    Yakutsk, in my {(new Date().getFullYear() - 1985)} years old I love nature and my family.
                    We also have a West Highland White Terrier.
                    Here is his <a href="https://corbenykt.github.io/fozzy/">page</a>.
                    I also love programming, before that I worked in the field of building and construction
                    design for a long time. Currently, I entered St. Petersburg Polytechnic University for a
                    joint postgraduate program "Intelligent Systems" with the University of Wellington...
                    So, as i'm trying to learn ReactJS let me upload nost interesting homeworks here...</p>
            </div>

        </div>
    )
}
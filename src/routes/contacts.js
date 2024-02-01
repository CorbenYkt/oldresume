import { LineWeight } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import meAvatar from "../"
import me from "../img/avatar.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Contacts() {

    React.useEffect(() => {
    }, []);

    return (<>
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'}>
            <Box alt={'Fozzy'} component={'img'} src={me}
                width={{ xs: '35vh', md: '40vh' }}
                height={{ xs: '35vh', md: '40vh' }}
                borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />

            <Box fontSize={'1rem'} maxHeight={'calc(100vh - 175px)'} width={{ xs: '80%', md: '60%' }} >
                <div>My linked-In profile: <Link to='http://www.linkedin.com/in/dmitrii-artemev' className='simpleLink'>www.linkedin.com/in/dmitrii-artemev</Link>
                </div>
                <div>GIT: <a href='https://github.com/corbenykt'>https://github.com/corbenykt</a></div>
                <div>phone: +64 22 594 6268</div>
                <div>whatsapp: +7 964 419 7913</div>
                <div>
                    e-mail: vool34@gmail.com
                </div>
            </Box>
        </Box>

        {/* <Box display={'flex'} flexDirection={'column'}>
            <div>My linked-In profile: <Link to='http://www.linkedin.com/in/dmitrii-artemev' className='simpleLink'>www.linkedin.com/in/dmitrii-artemev</Link>
            </div>
            <div>GIT: <a href='https://github.com/corbenykt'>https://github.com/corbenykt</a></div>
            <div>phone: +64 22 594 6268</div>
            <div>whatsapp: +7 9644197913</div>
            <div>
                email: vool34@gmail.com
            </div>
        </Box> */}
    </>
    );
}
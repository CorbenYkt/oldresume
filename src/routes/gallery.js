// import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
    const [IsLoading, setIsLoading] = React.useState(true);
    const [images, setImages] = React.useState(null);

    async function fetchPhotos() {
        setIsLoading(true);
        try {
            const { data } = await axios.get('https://google-photos-album-demo2.glitch.me/TL8QPHvenpGpf6BC7');
            console.log(data);
            setImages(
                data.map(url => ({
                    original: `${url}=w800`,
                    thumbnail: `${url}=w100`
                }))
            );

        } catch {
            //setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <>
            <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
                justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        {IsLoading ?
                            (<p>Loading photos taken from my shared Google album...</p>)
                            :
                            (<ImageGallery items={images}></ImageGallery>)
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
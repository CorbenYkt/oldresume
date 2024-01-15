// import { ReactImageCarouselViewer } from "react-image-carousel-viewer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImagesGallery = () => {
    const [images, setImages] = React.useState(null);

    React.useEffect(() => {
        let shouldCancel = false;

        const call = async () => {
            const response = await axios.get(
                "https://google-photos-album-demo2.glitch.me/TL8QPHvenpGpf6BC7"
            );
            if (!shouldCancel && response.data && response.data.length > 0) {
                setImages(
                    response.data.map(url => ({
                        original: `${url}=w640`,
                        thumbnail: `${url}=w100`
                    }))
                );
            }
        };
        call();
        return () => (shouldCancel = true);
    }, []);

    return images ? <ImageGallery items={images} /> : null;
};

export default function Gallery() {
    return (
        <>
            <p>This photos taken from my shared Google album</p>
            <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
                justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
                <Grid container justifyContent="center">
                    <Grid item xs={8}>
                        <ImagesGallery></ImagesGallery>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
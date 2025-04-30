import React from "react";


import BannerModuleStyle from "./Banner.module.css"

interface ImageBannerProps {
    imgSrc: string;
    alt: string;
    bigText?: string;
    text?: string;
    style?: React.CSSProperties;
}

const ImageBanner = ({data}: { data: ImageBannerProps }) => {

    const {imgSrc, alt, style, bigText, text}: { imgSrc: string, alt: string, bigText?: string, text?: string } & {
        style?: React.CSSProperties
    } = data;
    return (
        <div className={BannerModuleStyle.banner}>
            <img style={style} src={imgSrc} alt={alt}/>
            <h1>{bigText}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ImageBanner;



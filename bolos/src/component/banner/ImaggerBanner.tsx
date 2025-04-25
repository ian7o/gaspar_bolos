import React from "react";


import BannerModuleStyle from "./Banner.module.css"

const ImageBanner = ({imgSrc, alt, style, bigText, text}: { imgSrc: string, alt: string,bigText?:string, text?:string } & { style?: React.CSSProperties }) => {

    return (
        <div className={BannerModuleStyle.banner}>
            <img style={style} src={imgSrc} alt={alt} />
            <h1>{bigText}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ImageBanner;



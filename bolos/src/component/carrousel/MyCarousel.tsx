import carouselStyle from "./MyCarouselStyle.module.css"
import React from "react";

interface carouselSectionProps {
    title?: string
    text?: string
}

interface carouselProps {
    imageStyle?: React.CSSProperties
    imageSrc?: string
    alt?: string
    imageTitle?: string
    imageDescription?: string
}

const Carousel = ({title, text,imageStyle, imageSrc, alt, imageTitle, imageDescription}
                    : carouselSectionProps & carouselProps) => {

    return (
        <div className={carouselStyle.carouselContainer}>
            <div className={carouselStyle.section}>
                <h1>
                    {title}
                </h1>
                <p>
                    {text}
                </p>
            </div>
            <div className={carouselStyle.images}>
                <img style={imageStyle} src={imageSrc} alt={alt}>
                </img>
                <h1>
                    {imageTitle}
                </h1>
                <p>
                    {imageDescription}
                </p>
            </div>
        </div>
    )
}

export default Carousel;
import React from "react";
import carouselStyle from "./MyCarouselStyle.module.css"

interface carouselSectionProps {
    title?: string
    text?: string
}

interface carouselProps {
    containerStyle?: React.CSSProperties,
    imageStyle?: React.CSSProperties,
    imageSrc?: string,
    alt?: string,
    imageTitle?: string,
    imageDescriptionOrText?: string,
}

const Carousel = ({data}: { data: carouselSectionProps & carouselProps }) => {
    const {
        containerStyle,
        title,
        text,
        imageStyle,
        imageSrc,
        alt,
        imageTitle,
        imageDescriptionOrText
    }: carouselSectionProps & carouselProps = data;
    return (
        <div style={containerStyle} className={carouselStyle.carouselContainer}>
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
                    {imageDescriptionOrText}
                </p>
            </div>
        </div>
    )
}

export default Carousel;
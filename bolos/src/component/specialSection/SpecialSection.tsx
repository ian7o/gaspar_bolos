import React from "react";

interface SpecialSectionProps {
    style: React.CSSProperties
    imgSrc: string
    alt: string
    imageDescription: string

    sectionTitle: number
    sectionText: string

    buttonText: string
    buttonLink: string
}

const SpecialSection = ({data} : { data:SpecialSectionProps }) => {

        const {style, imgSrc, alt, imageDescription, sectionTitle, sectionText, buttonText, buttonLink} = data;
    return (
        <div>
            <img style={style} src={imgSrc} alt={alt}/>
            <p>{imageDescription}</p>
            <h1>
                {sectionTitle}
            </h1>
            <p>
                {sectionText}
            </p>
            <button>
                {buttonText}
                <a href={buttonLink}>
                </a>
            </button>
        </div>
    )
}

export {SpecialSection};
export type { SpecialSectionProps };

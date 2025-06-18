import React from "react";

import specialSectionStyle from "./SpecialSectionStyle.module.css"

interface SpecialSectionProps {
    style: React.CSSProperties
    imgSrc: string
    alt: string
    imageDescription: string
    sectionTitle: string
    sectionText: string
    buttonText: string
    buttonLink: string
}

const SpecialSection = ({
                            data: {
                                style,
                                imgSrc,
                                alt,
                                imageDescription,
                                sectionTitle,
                                sectionText,
                                buttonText,
                                buttonLink
                            }
                        }: { data: SpecialSectionProps }) => {

    return (
        <div className={specialSectionStyle.specialSection}>
            <div className={specialSectionStyle.imageAndDescription}>
                <img style={style} src={imgSrc} alt={alt}/>
                <p>{imageDescription}</p>
            </div>
            <div className={specialSectionStyle.content}>
                <h1>
                    {sectionTitle}
                </h1>
                <p>
                    {sectionText}
                </p>
                <a href={buttonLink}>
                    <button className={specialSectionStyle.button}>
                        {buttonText}
                    </button>
                </a>
            </div>
        </div>
    )
}

export {SpecialSection};
export type {SpecialSectionProps};

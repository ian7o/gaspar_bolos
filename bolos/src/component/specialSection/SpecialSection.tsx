import React from "react";

import specialSectionStyle from "./SpecialSectionStyle.module.css"

interface SpecialSectionProps {
    style: React.CSSProperties
    imgSrc: string
    alt: string
    imageDescription: string
    sectionTitle: string
    sectionText: string
    actionImageSrc: string
    actionImageAlt: string
}

const SpecialSection = ({
                            data: {
                                style,
                                imgSrc,
                                alt,
                                imageDescription,
                                sectionTitle,
                                sectionText,
                                actionImageSrc,
                                actionImageAlt
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
                <img
                    className={specialSectionStyle.cakeImage}
                    src={actionImageSrc}
                    alt={actionImageAlt}
                />
            </div>
        </div>
    )
}

export {SpecialSection};
export type {SpecialSectionProps};

import React from "react";

import contactStyle from "./ContactsSection.tsx.module.css"

interface ConsecrationProps {
    containerStyle?: React.CSSProperties
    bigText: string
    contacts: string
}

const ContactsSection = ({data}: { data: ConsecrationProps }) => {
    const {containerStyle, bigText, contacts} = data;
    return (
        <div style={containerStyle} className={contactStyle.container}>
            <div className={contactStyle.contentContainer}>
                <h1>
                    {bigText}
                </h1>
                <p className={contactStyle.simpleText} dangerouslySetInnerHTML={{__html: contacts}}/>
            </div>
        </div>
    )
}


export {ContactsSection};
export type {ConsecrationProps};
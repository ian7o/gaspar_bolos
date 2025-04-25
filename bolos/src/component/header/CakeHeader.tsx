import React from "react";
import headerStyle from "./cakeHeader.module.css"

interface HeaderProps {
    logo?: string,
    aboutUs?: string,
    ourHistory?: string,
    contact?: string
}

interface  HeaderLinks {
    logoHref?:string,
    aboutUSHref?:string,
    ourHistoryHref?:string,
    contactHref?:string

}

const { logoHref, aboutUSHref, ourHistoryHref, contactHref }: HeaderLinks = {
    logoHref: "https://www.gasparbolos.com/logo",
    aboutUSHref: "https://www.gasparbolos.com/about-us",
    ourHistoryHref: "https://www.gasparbolos.com/our-history",
    contactHref: "https://www.gasparbolos.com/contact"
};


    function SiteHeader({logo, aboutUs, ourHistory, contact}: HeaderProps) {
        return (
        <>
            <nav className={headerStyle.navBar}>
                <ul>
                    <li><a href={logoHref}>{logo}</a></li>
                    <li><a href={aboutUSHref}>{aboutUs}</a></li>
                    <li><a href={ourHistoryHref}>{ourHistory}</a></li>
                    <li><a href={contactHref}>{contact}</a></li>
                </ul>
            </nav>
        </>
    )
}

export default SiteHeader;
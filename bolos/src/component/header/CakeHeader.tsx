import headerStyle from "./cakeHeader.module.css"

interface HeaderProps {
    logo?: string,
    aboutUs?: string,
    ourHistory?: string,
    contact?: string,
}

interface HeaderLinks {
    logoHref?: string,
    aboutUSHref?: string,
    ourHistoryHref?: string,
    contactHref?: string

}

const {logoHref, aboutUSHref, ourHistoryHref, contactHref}: HeaderLinks = {
    logoHref: "/home",
    aboutUSHref: "/about-us",
    ourHistoryHref: "/our-history",
    contactHref: "/contact"
};


function SiteHeader({data} :{data: HeaderProps}) {
    const {logo, aboutUs, ourHistory, contact}: HeaderProps = data;
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
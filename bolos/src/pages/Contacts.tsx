import './styles/App.css'

import SiteHeader from "../component/header/CakeHeader.tsx";

//site header thinks
const siteHeaderData = {
    logo: "Gaspar Bolos",
    aboutUs: "About us",
    ourHistory: "Our history",
    contact: "Our Contacts"
}


//carousel
/*
let imageStyle1InCarousel: React.CSSProperties = {
    width: "500px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
};

let styleInCarouselContainer = {
    marginTop: " 80px",
    backgroundColor: "#6F4E37",
}

let carouselData = {
    style: styleInCarouselContainer,
}
 */

//ContactSection
import {ContactsSection} from "../component/ContactsSection/ContactsSection"
import React from 'react';


const contactsSectionData = {

    bigText: "NOSSOS CONTACTOS E INFORMAÇÕES",
    contacts:
        "horario de funcionamento: <br> " +
        "Segunda a Sexta 7h00 - 18h00 | Sábado 7:00 AM - 4:00 PM<br>" +
        "<br>"+
        "Telefone: (678) 580-0734<br >" +
        "E-mail: gasparbolos@Gmail.com<br> <br>" +
        "Endereço:<br>" +
        "Rua da mindera atras da trindade"
}

function App() {
    return (
        <>
            <SiteHeader data={siteHeaderData}/>
            {/*<Carousel data={carouselData}/>*/}
            <ContactsSection data={contactsSectionData}/>
        </>
    )
}

export default App
import './styles/App.css'

import SiteHeader from "../component/header/CakeHeader.tsx";

//site header thinks
const siteHeaderData = {
    logo: "Gaspar Bolos",
    aboutUs: "About us",
    ourHistory: "Our history",
    contact: "Our Contacts"
}

//ContactSection
import {ContactsSection} from "../component/ContactsSection/ContactsSection"


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
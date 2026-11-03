import './styles/App.css'

import SiteHeader from "../component/header/CakeHeader.tsx";

//site header
const siteHeaderData = {
    logo: "Gaspar Bolos",
    aboutUs: "About us",
    ourHistory: "Our history",
    contact: "Our Contacts"
}

import aboutUsStyle from "./styles/AboutUs.module.css"
import quizStyle from "./styles/Quiz.module.css"


function App() {
    return (
        <>
            <SiteHeader data={siteHeaderData}/>
            <div className={quizStyle.container}>
                <p className={aboutUsStyle.titles}>
                    Veja o bolo que o EDGAR vai comprar:
                </p>
                <img
                    className={quizStyle.cakeImage}
                    src="/bolo.jpeg"
                    alt="Bolo de chocolate com morangos"
                />
            </div>
        </>
    )
}

export default App

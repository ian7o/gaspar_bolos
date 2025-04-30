import './styles/App.css'
import React from "react";

import SiteHeader from "../component/header/CakeHeader.tsx";
import Button from "../component/button/Button.tsx";

//site header
const siteHeaderData = {
    logo: "Gaspar Bolos",
    aboutUs: "About us",
    ourHistory: "Our history",
    contact: "Our Contacts"
}

import aboutUsStyle from "./styles/AboutUs.module.css"
import quizStyle from "./styles/Quiz.module.css"


//button
let buttonStyle = {
    width: "200px",
    height: "100px",
    fontsize: "40px"
}
let buttonTextStyle: React.CSSProperties = {
    fontSize: "40px",
    margin: "0px"
}


let buttonData = {
    buttonStyle: buttonTextStyle,
    style: buttonStyle,
    text : "Link do bolo",
    buttonLink:'https://leca.ogatocomeutealingua.pt/produto/bolo-brigadeiro-135e-kg/'
}


function App() {
    return (
        <>
            <SiteHeader data={siteHeaderData}/>
            <div className={quizStyle.container}>
                <p className={aboutUsStyle.titles}>
                    Veja o bolo que o EDGAR vai comprar:
                </p>
                <div>
                    <Button data={buttonData} />
                </div>
            </div>
        </>
    )
}

export default App
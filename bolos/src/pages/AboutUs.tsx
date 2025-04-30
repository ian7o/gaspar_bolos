import './styles/App.css'
import React from "react";

import ImageBanner from "../component/banner/ImaggerBanner.tsx";
import SiteHeader from "../component/header/CakeHeader.tsx";
import Button from "../component/button/Button.tsx";

//site header
const siteHeaderData = {
    logo: "Gaspar Bolos",
    aboutUs: "About us",
    ourHistory: "Our history",
    contact: "Our Contacts"
}

//imageBanner
import cakeHeaderImg
    from "../assets/Cursos-oferecidos-pela-Cozinha-Experimental-sao-gratuitos-a-populacao_Foto_Thais_Passos_SEMA-1024x768.jpg"

const imageBannerData = {
    imgSrc: cakeHeaderImg,
    alt: "cakeHeader",
    bigText: "Doceria Gaspar",
    text: "Aqui temos os melhores bolos para toda a ocasião"
}

import aboutUsStyle from "./styles/AboutUs.module.css"


//button
const buttonStyle = {
    width: "100px",
    height: "50px",
    fontsize: "40px"
}
const buttonTextStyle: React.CSSProperties = {
    fontSize: "40px",
    margin: "0px"
}

const buttonData = [{
    buttonStyle: buttonTextStyle,
    style: buttonStyle,
    text: 'Sim',
    buttonLink: '/quiz'
},
    {
        buttonStyle: buttonTextStyle,
        style: buttonStyle,
        text: 'Não',
        buttonLink: '/quiz'
    }
]

function App() {
    return (
        <>
            <SiteHeader data={siteHeaderData}/>
            <ImageBanner data={imageBannerData}/>
            <div className={aboutUsStyle.container}>
                <p className={aboutUsStyle.titles}>
                    Quem somos nós?
                </p>
                <p>
                    Somos uma equipe de 1 formada pelo o ian, que é incrivel
                </p>
                <p className={aboutUsStyle.titles}>
                    Tempo de criação?
                </p>
                <p>
                    Fomos criados em 3 dias desculpe pelo design horoso
                </p>
                <p className={aboutUsStyle.titles}>
                    O ian merece bolo?
                </p>
                <div>
                    <Button data={buttonData[0]}/>
                    <Button data={buttonData[1]}/>
                </div>
            </div>
        </>
    )
}

export default App
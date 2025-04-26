import './App.css'

import ImageBanner from "./component/banner/ImaggerBanner.tsx";
import SiteHeader from "./component/header/CakeHeader.tsx";
import Carousel from "./component/carrousel/MyCarousel.tsx";

//site header thinks
const slogan: string = "Aqui temos os melhores bolos para toda a ocasião"
const siteHeaderData = {
    logo: "Gaspar Bolos",
    aboutUs: "About us",
    ourHistory: "Our history",
    contact: "Our Contacts"
}

//imageBanner
const bigTextForBanner: string = "Doceria Gaspar";
import cakeHeaderImg
    from "./assets/bolos-decorados-com-chantilly-colorido-e-com-vela-de-unicornio-Foto-The-Unicorn-Store.jpg"

//carousel
import carouselImg1 from "./assets/zahrawi.jpg"
import carouselImg2 from "./assets/pontualidade.jpg"
import React from "react";

let imageStyle1InCarousel: React.CSSProperties = {
    width: "500px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
};

let carouselData = {
    title: "Sobre nós",
    text: "Somos os melhores da regiao",
    imageStyle: imageStyle1InCarousel,
    imageSrc: carouselImg1,
    alt: "about us image",
    imageTitle: "Trabalho em equipe",
    imageDescription: "Amamos trabalhar em equipe"
}


//Special section
import specialSectionImg1 from"./assets/maxresdefault.jpg"
import {SpecialSection} from "./component/specialSection/SpecialSection.tsx";
import {SpecialSectionProps} from "./component/specialSection/SpecialSection.tsx";

let imageStyle1InSpecialSection: React.CSSProperties = {
    width: "50px",
    height: "auto",
};

let specialSectionData: SpecialSectionProps = {
    imgSrc: specialSectionImg1,
    style: imageStyle1InSpecialSection,
    alt: "text",
    imageDescription: "apenas uma imagem",
    sectionTitle: "123",
    sectionText: "este é o produto mais cobiçado entre os clientes",
    buttonText: "clique para ver o produto",
    buttonLink: "linkzaooo"
}


function App() {
    return (
        <>
            <SiteHeader logo={siteHeaderData.logo} aboutUs={siteHeaderData.aboutUs}
                        ourHistory={siteHeaderData.ourHistory} contact={siteHeaderData.contact}/>

            <ImageBanner imgSrc={cakeHeaderImg} alt={"cakeHeader"} bigText={bigTextForBanner} text={slogan}/>

            <Carousel title={carouselData.title} text={carouselData.text} imageStyle={carouselData.imageStyle}
                      imageSrc={carouselData.imageSrc} alt={carouselData.alt}
                      imageTitle={carouselData.imageTitle}
                      imageDescription={carouselData.imageDescription}></Carousel>

            <SpecialSection data={specialSectionData}/>


        </>
    )
}

export default App

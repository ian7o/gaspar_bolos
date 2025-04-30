import './styles/App.css'
import React from "react";

import ImageBanner from "../component/banner/ImaggerBanner.tsx";
import SiteHeader from "../component/header/CakeHeader.tsx";
import Carousel from "../component/carrousel/MyCarousel.tsx";

//site header thinks
const siteHeaderData = {
    logo: "Gaspar Bolos",
    aboutUs: "About us",
    ourHistory: "Our history",
    contact: "Our Contacts"
}

//imageBanner
import cakeHeaderImg
    from "../assets/bolos-decorados-com-chantilly-colorido-e-com-vela-de-unicornio-Foto-The-Unicorn-Store.jpg"

const imageBannerData = {
    imgSrc: cakeHeaderImg,
    alt: "cakeHeader",
    bigText: "Doceria Gaspar",
    text: "Aqui temos os melhores bolos para toda a ocasião"
}


//carousel
import carouselImg1 from "../assets/mapa-dos-distritos-de-Portugal.jpeg"
import carouselImg2 from "../assets/pontualidade.jpg"
import carouselImg3 from "../assets/1-Pessoas-Felizes-Clinica-de-Mastologia.jpg"



const imageStyleInCarousel = [{
    width: "200px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
},{
    width: "500px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
}
]

const containerStyle = [{
    backgroundColor: "#bfbf31"
}, {
    backgroundColor: "#4f4fc3"
}]


const carouselData = [{
    title: "Sobre nós",
    text: "Somos os melhores da regiao",
    imageStyle: imageStyleInCarousel[0],
    imageSrc: carouselImg1,
    alt: "sobre nos image",
    imageTitle: "Mapa de portugal",
}, {
    containerStyle: containerStyle[0],
    title: "Pontualidade",
    text: "Entregamos os pedidos sempre no prazo certo",
    imageStyle: imageStyleInCarousel[1],
    imageSrc: carouselImg2,
    alt: "pontualidade imagem",
}, {
    containerStyle: containerStyle[1],
    title: "Muito amor",
    text: "Aqui Só temos pessoas felizes",
    imageStyle: imageStyleInCarousel[1],
    imageSrc: carouselImg3,
    alt: "pontualidade de pessoas felizes",
}
]

//Special section
import specialSectionImg1 from "../assets/maxresdefault.jpg"
// @ts-ignore
import {SpecialSection} from "../component/specialSection/SpecialSection.tsx";
// @ts-ignore
import {SpecialSectionProps} from "../component/specialSection/SpecialSection.tsx";

const imageStyle1InSpecialSection: React.CSSProperties = {
    width: "500px",
    height: "auto",
};


const specialSectionData: SpecialSectionProps = {
    imgSrc: specialSectionImg1,
    style: imageStyle1InSpecialSection,
    alt: "Bolo de chocolate com morango",
    imageDescription: "Bolo de chocolate com morango",
    sectionTitle: "PRODUTO ESPECIAL EM DESTAQUE",
    sectionText: "Este é o produto mais amado entre os clientes",
    buttonText: "Clique para ver o produto",
    buttonLink: "https://pedacosdecacau.pt/outros-chocolates/bolo-exotico-de-chocolate/?attribute_cobertura-bolo-exotico-de-chocolate=Raspas+de+Chocolate&gad_source=1&gad_campaignid=21200508872&gbraid=0AAAAADimJ3ekwzL9S8SD5lm-IxEbvzNOv&gclid=EAIaIQobChMI9sGj6aL2jAMVmqJoCR0j9ijEEAQYAiABEgKEx_D_BwE"
}

function App() {
    return (
        <>
            <SiteHeader data={siteHeaderData}/>
            <ImageBanner data={imageBannerData}/>
            {
                carouselData.map((item, index) => (
                    <Carousel key={index} data={item}/>
                ))
            }
            <SpecialSection data={specialSectionData}/>
        </>
    )
}

export default App
import React from "react";
import "../App.css";

function Carousel() {
    return (
        <div className="m-40 mt-20 h-96 overflow-scroll carousel carousel-center rounded-box">
            <div className="carousel-item">
                <img className="object-cover max-w-full max-h-full" src={require('../img/20220123_022353680_iOS.png')} alt="pic" />
            </div> 
            <div className="carousel-item">
                <img className="object-cover max-w-full max-h-full" src={require('../img/20220328_035241615_iOS.png')} alt="Burger" />
            </div> 
            <div className="carousel-item">
                <img className="object-cover max-w-full max-h-full"src={require('../img/20220423_215520435_iOS.jpg')} alt="Burger" />
            </div> 
            <div className="carousel-item">
                <img className="object-cover max-w-full max-h-full" src={require("../img/20220525_054413218_iOS.png")} alt="Burger" />
            </div> 
            <div className="carousel-item">
                <img className="object-cover max-w-full max-h-full" src={require("../img/genshn....png")} alt="Burger" />
            </div> 
            <div className="carousel-item">
                <img className="object-cover max-w-full max-h-full" src={require("../img/20220309_175011000_iOS.jpg")} alt="img"/>
            </div>
        </div>
    )
}

export default Carousel;
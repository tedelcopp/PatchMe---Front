// AutoPlay.js
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../CarruselOfferts/CarruselOfferts.module.css"

export default class AutoPlay extends Component {
  render() {
    const settings = {
     dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1200,
    cssEase: "linear"
  };

  const ofertas = [
    {
      id: 1,
      name: 'Patch Rick & Morty',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Patch Flowers',
      image: 'https://via.placeholder.com/300',
      origin: 'Chile',
      category: 'Blanco',
    },
    {
      id: 3,
      name: 'Patch Wine Lover',
      image: 'https://via.placeholder.com/300',
      origin: 'España',
      category: 'Rosado',
    },
    {
      id: 4,
      name: 'Patch Smile',
      image: 'https://via.placeholder.com/300',
      origin: 'Argentina',
      category: 'Tinto',
    },
    {
      id: 5,
      name: 'Patch Good Life',
      image: 'https://via.placeholder.com/300',
      origin: 'Chile',
      category: 'Blanco',
    },
    {
      id: 6,
      name: 'Patch Better',
      image: 'https://via.placeholder.com/300',
      origin: 'España',
      category: 'Rosado',
    },
  ];

  return (
    <div className={styles.offertContainer} >
      <h2 className={styles.offerts}>Destacados del mes</h2>
      <Slider className={styles.slickSlider} {...settings}>
        {ofertas.map(oferta => (
          <ProductCard key={oferta.id} oferta={oferta} />
        ))}
      </Slider>
      <div className={styles.offerts}></div>
    </div>
    
  );
}
 }
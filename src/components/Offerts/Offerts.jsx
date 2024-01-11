import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import style from "./Offerts.module.css"; 

SwiperCore.use([]);

const ofertas = [
  {
    id: 1,
    name: "Vino Tinto Reserva",
    image: "https://via.placeholder.com/300", 
    origin: "Argentina",
    category: "Tinto",
  },
  {
    id: 2,
    name: "Vino Blanco Premium",
    image: "https://via.placeholder.com/300", 
    origin: "Chile",
    category: "Blanco",
  },
  {
    id: 3,
    name: "Vino Rosado Exclusivo",
    image: "https://via.placeholder.com/300", 
    origin: "España",
    category: "Rosado",
  },
  {
    id: 4,
    name: "Vino Espumante Brut",
    image: "https://via.placeholder.com/300", 
    origin: "Francia",
    category: "Espumante",
  },
  {
    id: 5,
    name: "Vino Malbec Reserva",
    image: "https://via.placeholder.com/300", 
    origin: "Argentina",
    category: "Tinto",
  },
];

export default function Offerts() {
  return (
    <div className="text-center">
      <div className={style.flexContainer}>
        <h3 className={style.favoriteMonth}>
          <u>Destacados del Mes</u>
        </h3>
      </div>
      <div className={style.reel}>
        <Swiper
          speed={2000}
          freeMode={true}
          grabCursor={true}
          autoplay={{ delay: 1000 }}
          keyboard={{ enabled: true }}
          className="m-3"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 30, centeredSlides: true },
            480: { slidesPerView: 1, spaceBetween: 15, centeredSlides: true },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1440: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {ofertas.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/detail/${item.id}`} key={item.id}>
                <div className="card">
                  <h1 className="card-title">{item.name}</h1>
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className={style.cardBody}>
                  <FaHeart className={style.heartIcon} />
                  <FaCartPlus className={style.cartIcon} />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
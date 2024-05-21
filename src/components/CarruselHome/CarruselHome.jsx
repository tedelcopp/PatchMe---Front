import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import WallpaperPatchMe1 from "../../assets/Carousel/WallpaperPatchMe1.jpg";
import WallpaperPatchMe2 from "../../assets/Carousel/WallpaperPatchMe2.jpg";
import WallpaperPatchMe3 from "../../assets/Carousel/WallpaperPatchMe3.jpg";
import styles from "./CarruselHome.module.css";

export default function Carrusel() {
  return (
    <div className={`mb-4 ${styles.carouselContainer}`}>
      <Carousel>
        <Carousel.Item interval={2500}>
          <div className={styles.imageContainer}>
            <img
              className="d-block w-100"
              src={WallpaperPatchMe1}
              alt="First slide"
            />
          </div>
          s
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className={styles.imageContainer}>
            <img
              className="d-block w-100"
              src={WallpaperPatchMe2}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className={styles.imageContainer}>
            <img
              className="d-block w-100"
              src={WallpaperPatchMe3}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

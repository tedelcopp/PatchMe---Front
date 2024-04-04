import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./CarruselHome.module.css"

export default function Carrusel() {
  return (
    <div className={`mb-4 ${styles.carouselContainer}`}>
 <Carousel>
      <Carousel.Item interval={2500}>
      <div className={styles.imageContainer}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/9V6GkhS/10-4-1.jpg"
          alt="First slide"
          />
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <div className={styles.imageContainer}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/0h3mLTr/10-1-1.jpg"
          alt="Second slide"
          />
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <div className={styles.imageContainer}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/DpcWzPG/3.jpg"
          alt="Third slide"
          />
          </div>
      </Carousel.Item>
    </Carousel>
          </div>
  );
}

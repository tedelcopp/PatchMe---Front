import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./CarruselHome.module.css"

export default function Carrusel() {
  return (
    <div className={`mb-4 ${styles.carouselContainer}`}>
 <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/vL0fNb5/original.png"
          alt="First slide"
          />
       <Carousel.Caption className={styles.carouselCaption}>
          <h3>Reduce • Reuse • Recycle</h3> 
<p>~ Exclusive Items - Feria Vintage ®️ ~</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ssKpR9P/blue-dark-light-formation-4k-92.jpg"
          alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ssKpR9P/blue-dark-light-formation-4k-92.jpg"
          alt="Third slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
  );
}

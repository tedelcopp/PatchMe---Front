import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Carrusel.module.css"

export default function Carrusel() {
  return (
    <div className={`mb-4 ${styles.carouselContainer}`}>
 <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block ${styles.carouselImage}`}
          src="https://i.ibb.co/ssKpR9P/blue-dark-light-formation-4k-92.jpg"
          alt="First slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
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
      <Carousel.Item>
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

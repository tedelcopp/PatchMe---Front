import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './AboutUs.module.css';  

export default function AboutUs(){
  return (
    <Container className={`mt-5 ${styles['about-us-container']}`}>
      <Row>
        <Col className="text-center">
          <h2><u>Sobre Nosotros</u></h2>
          <p className="text-justify text-md-left">
            ¡Bienvenido a Patch&Me! Somos tu tienda de parches exclusivos para personalizar tus prendas
            y expresar tu estilo único. Nuestra misión es ofrecer una amplia variedad de parches de alta calidad
            que se adapten a todos los gustos y personalidades.
          </p>
          <p className="text-justify text-md-left">
            En Patch&Me, creemos en la individualidad y la creatividad. Nos esforzamos por proporcionarte parches
            únicos y emocionantes que te permitan transformar tu ropa en obras de arte personalizadas. Desde
            parches bordados clásicos hasta diseños modernos y divertidos, encontrarás algo que te inspire.
          </p>
          <p className="text-justify text-md-left">
            Nuestra colección se actualiza regularmente para ofrecerte las últimas tendencias en parches.
            Nos enorgullece ofrecer productos de alta calidad y un servicio excepcional para que tu experiencia
            de compra sea perfecta.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './AboutUs.module.css';
import Questions from '../../components/Questions/Questions';

export default function AboutUs() {
  return (
    <div>
      <Container className={`mt-5 ${styles.aboutUsContainer}`}>
        <Row>
          <Col className={`text-center ${styles.aboutUsText}`}>
            <div className={styles.titleAbout} >
            <h2><u>Nosotros</u></h2>
            </div>
            <p>
              ¡Bienvenido a Patch&Me! Somos tu tienda de parches exclusivos para personalizar tus prendas
              y expresar tu estilo de manera unica. Nuestra misión es ofrecerte patchs de calidad que se adapten a todos los gustos y personalidades.
            </p>
            <p>
              En Patch&Me, creemos en la individualidad y la creatividad. Nos esforzamos por proporcionarte parches
              únicos y emocionantes que te permitan transformar tu ropa en obras de arte personalizadas. Desde
              parches bordados clásicos hasta diseños modernos y divertidos, encontrarás algo que te inspire.
            </p>
            <p>
              Nuestra colección se actualiza regularmente para ofrecerte las últimas tendencias en parches.
              Nos enorgullece ofrecer productos de alta calidad y un servicio excepcional para que tu experiencia
              de compra sea perfecta.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className={`mt-5 ${styles.offerts}`}></Container>
      <Container className={styles.questionsContainer}>
        {/* <div className={styles.titleQuestions}>
          <h2><u>Preguntas Frecuentes</u></h2>
        </div> */}
        <Questions />
      </Container>
      <div className={`mt-5 ${styles.offerts}`}></div>
    </div>
  );
}

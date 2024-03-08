import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './AboutUs.module.css';
import Questions from '../../components/Questions/Questions';

export default function AboutUs() {
  return (
    <div>
      <div className={styles.aboutUsBackground}>
        <Container className={`mt-5 ${styles.aboutUsContainer}`}>
          <Row>
            <Col className={`text-center ${styles.aboutUsText}`}>
              <div className={styles.titleAbout}>
                <h2><u>Nosotros</u></h2>
              </div>
              <p>
                Bienvenido a Patch&Me, tu tienda de parches exclusivos, diseñados para personalizar tus prendas y expresar tu estilo de manera única. Te acercamos la más alta y variada calidad para que puedas customizar todas tus prendas.
              </p>
              <p>
                Creemos en la individualidad y la creatividad. Y trabajamos día a día para proporcionarte parches únicos que te permitan transformar tus prendas en obras de arte personalizadas. Contamos con diseños clásicos y modernos, encontrarás una amplia variedad que te inspirará a crear.
              </p>
              <p>
                Nuestra colección se actualiza regularmente para ofrecerte las últimas tendencias en parches. Nos enorgullece ofrecer productos de alta calidad y un servicio excepcional para que tu experiencia de compra sea perfecta.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className={`mt-5 ${styles.offerts}`}></Container>
        <Container className={styles.questionsContainer}>
          <div className={styles.titleQuestions}>
            <h2><u>¿Podemos ayudarte?</u></h2>
          </div> 
          <Questions />
        </Container>
      </div>
    </div>
  );
}

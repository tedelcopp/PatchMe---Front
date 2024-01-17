import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { IoMdCard } from 'react-icons/io';
import { FaTruck } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import styles from "./Icons.module.css"

export default function Icons() {
  return (
    <Container className={styles.iconsContainer}>
      <Row>
        <Col xs={12} md={3} className="text-center mb-4">
          <FaTruck className={styles.icon}  />
          <h5>Envíos</h5>
          <p className="mb-0">Envíos gratis a todo el país en compras superiores a $25000.</p>
        </Col>

        <Col xs={12} md={3} className="text-center mb-4">
          <IoMdCard className={styles.icon}  />
          <h5>Medios de Pago</h5>
          <p>Tarjeta de crédito, débito y/o transferencia bancaria.</p>
        </Col>

        <Col xs={12} md={3} className="text-center mb-4">
          <FaPercentage className={styles.icon} />
          <h5>3 y 6 cuotas sin interés</h5>
          <p>Abonando con todas las tarjetas de crédito.</p>
        </Col>

        <Col xs={12} md={3} className="text-center mb-4">
          <RiShoppingBag3Line className={styles.icon}  />
          <h5>Pick Up</h5>
          <p>En nuestro local de Guise 1954, Palermo.</p>
        </Col>
      </Row>
    </Container>
  );
}

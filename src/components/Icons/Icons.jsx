import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { IoMdCard } from 'react-icons/io';
import { FaTruck } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";

export default function Icons(){
    return(
        <Container>

        <Row>
          <Col xs={12} md={3} className="text-center mb-4">
            <FaTruck size={110}/>
            <h5>Envíos</h5>
            <p className="mb-0">Envíos gratis a todo el país en compras superiores a $25000.</p>
          </Col>
  
          <Col xs={12} md={3} className="text-center mb-4">
            <IoMdCard size={110} />
            <h5>Medios de Pago</h5>
            <p>Tarjeta de crédito, débito y/o transferencia bancaria.</p>
          </Col>
  
          <Col xs={12} md={3} className="text-center mb-4">
            <FaPercentage size={110} />
            <h5>3 y 6 cuotas sin interés</h5>
            <p>Abonando con todas las tarjetas de crédito.</p>
          </Col>
  
          <Col xs={12} md={3} className="text-center mb-4">
            <RiShoppingBag3Line size={110} />
            <h5>Pick Up</h5>
            <p>En nuestro local de Guise 1954, Palermo.</p>
          </Col>
        </Row>
      </Container>
    );
  }
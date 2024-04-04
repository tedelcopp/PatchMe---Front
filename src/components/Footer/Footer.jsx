import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Card className={styles.footerContainer}>
      <div className={styles.bodyContainer}>
        <Card.Title><b>¿Querés comunicarte con nosotros?</b></Card.Title>
        <Card.Text className={`mb-1 font-italic ${styles.text}`}>
          <BsFillTelephoneFill /> 
          11 6200 27 57
        </Card.Text>
        <Card.Text className={`mb-2 font-italic ${styles.text}`}>
          <FaMapLocationDot /> Guise 1954 | Palermo, Buenos Aires.
        </Card.Text>
        <Card.Text><u><b>Conoce más en nuestras redes sociales!</b></u></Card.Text>
        <div>
          <Button variant="primary" className={`me-2 ${styles.icon}`} href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </Button>
          <Button variant="danger" className={`me-2 ${styles.icon}`} href="https://www.instagram.com/patch_.me" target="_blank">
            <FaInstagram />
          </Button>
          <Button variant="success" className={styles.icon} href="https://walink.co/e72b6f" target="_blank">
            <FaWhatsapp />
          </Button>
        </div>
        <div className={`${styles['custom-footer']} ${styles.text}`}>
          Copyright Patch&Me - 2024. Todos los derechos reservados.
        </div>
      </div>
    </Card>
  );
}

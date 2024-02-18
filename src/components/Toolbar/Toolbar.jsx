import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './Toolbar.module.css'; 

export default function Toolbar() {
  return (
    <div className={styles.container}>
      <ButtonToolbar
        className={`justify-content-between ${styles.shopContent}`} 
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup aria-label="First group">
          <Link to="/shop/novedades" className="btn btn-secondary">Novedades</Link>
          <Link to="cocidos" className="btn btn-secondary">Cocidos</Link>
          <Link to="/shop/termoadhesivos" className="btn btn-secondary">Termoadhesivos</Link>
          <Link to="/shop/outlet" className="btn btn-secondary">Outlet</Link>
        </ButtonGroup>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon2" >Patchs</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="¿Cual estas buscando?"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </InputGroup>
      </ButtonToolbar>
    </div>
  );
}

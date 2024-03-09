import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './SearchBarShop.module.css'; 

export default function SearchBarShop(){
    return(
        <div className={styles.searchBarContainer}>
             <InputGroup>
          <InputGroup.Text id="btnGroupAddon2" >Patchs</InputGroup.Text>
          <Form.Control
           className={styles.inputPlaceholder} 
            type="text"
            placeholder="¿Cual estas buscando?"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </InputGroup>
        </div>
    )
}

import Spinner from 'react-bootstrap/Spinner';
import styles from "../Loader/Loader.module.css"
export default function Loader() {
  return (
    <div className={styles.loaderContainer}> 
      <Spinner animation="border" />
    </div>
  );
}

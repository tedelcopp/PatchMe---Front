import Accordion from 'react-bootstrap/Accordion';

export default function Forum() {
  return (
    <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header>¿Realizan envios?</Accordion.Header>
        <Accordion.Body>
        Si, realizamos envios a todo el pais. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Donde se encuentran?</Accordion.Header>
        <Accordion.Body>
          Nos encontramos en el barrio de Palermo, Buenos Aires - Argentina.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿Como colocar los parches cocidos?</Accordion.Header>
        <Accordion.Body>
          <ol>
<li>Te recomendamos limpiar la tela previamente para asegurarte de que esté libre de suciedad.</li>
<li>Coloca el parche en la posición deseada y sujétalo con alfileres si es necesario.</li>
<li>Prepara hilos y una aguja que combine con el parche y la tela.</li>
<li>Utilizando la aguja e hilo, cose el parche a la tela. Puedes usar una puntada recta o cualquier otro método de costura según tu preferencia.</li>
<li>Asegúrate de coser bien los bordes del parche para que quede firmemente unido a la tela.</li>
<li>Realiza un nudo o una puntada de remate al finalizar la costura para asegurar que el hilo quede seguro.</li>
<li>Opcionalmente, puedes planchar el parche desde el reverso para asentar la costura.</li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">  
        <Accordion.Header>¿Como colocar los parches termoadhesivos?</Accordion.Header>
        <Accordion.Body>
          <ol>
        <li>Te recomendamos limpiar la tela previamente para asegurarte de que esté libre de suciedad.</li>
        <li>Ahora si, coloca el parche en la posición deseada y sujétalo con alfileres si es necesario.</li>
<li>Encende la plancha y espera a la temperatura recomendada para tu tela.</li>
<li>Coloca un paño delgado sobre el parche y la tela para protegerla.</li>
<li>Presiona la plancha firmemente sobre el parche durante 15 a 30 segundos.</li>
<li>Espera a que la tela se enfríe antes de volver a manipularla.</li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
}


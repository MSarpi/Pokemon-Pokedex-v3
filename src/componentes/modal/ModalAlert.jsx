import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAlert({show, handleClose}) {
  return (
    <div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ backgroundColor: "#2B2B2B", border:"1rem", color: "white" }}>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>error</Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#2B2B2B", border:"1rem", color: "white" }}>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default ModalAlert;
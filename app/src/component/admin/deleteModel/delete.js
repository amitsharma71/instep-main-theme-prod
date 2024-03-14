import React from "react";
import { Button, Modal } from "react-bootstrap";

const Delete = (props) => {
  const { handleDelete, handleClose, show, categoryId } = props;
  return (
    <div>
      <>
        <Modal
          className="removerfromcart_modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to remove this item ?</Modal.Body>
          <Modal.Footer>
            <Button
              className="cancelbut_removecart"
              variant="secondary"
              onClick={handleClose}
            >
              CANCEL
            </Button>
            <Button
              className="removebut_cart"
              variant="primary"
              onClick={() => {
                handleDelete(categoryId);
              }}
            >
              DELETE
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Delete;

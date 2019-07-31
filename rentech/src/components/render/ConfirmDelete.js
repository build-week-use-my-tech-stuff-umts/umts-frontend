import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";
//This Modal Component

const ConfirmDelete = () => {
  return (
    <div className="edit-account">
      <Modal size='mini' trigger={<Button color="red" size='small' >Delete</Button>}>
        <Modal.Header>U Sure Bro?</Modal.Header>
        <Modal.Content>
          <Button type='submit'>Fuck Yeah</Button>
          <Button type='submit'>Hell Nah</Button>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ConfirmDelete;
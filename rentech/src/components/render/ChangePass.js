import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";
import NewPass from "../forms/UpdatePassword.js";
//This Modal Component

const ChangePass = () => {
  return (
    <div className="edit-account">
      <Modal
        trigger={
          <Button size="huge" color="red">
            Update Password
          </Button>
        }
      >
        <Modal.Header>Update your Password</Modal.Header>
        <Modal.Content>
          <NewPass />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ChangePass;

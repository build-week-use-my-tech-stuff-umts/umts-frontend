import React from "react";
import { Header, Button, Modal, Image } from "semantic-ui-react";
import UpdatePassword from "../forms/UpdatePassword.js";
//This Modal Component

const ChangePass = (user) => {
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
          <UpdatePassword user={user}/>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ChangePass;

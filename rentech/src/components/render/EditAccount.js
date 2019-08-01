import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EditProfileForm from "../forms/EditProfileForm.js";
//This Modal Component

const EditAccount = user => {
  // console.log(user);
  return (
    <div className="edit-account">
      <Modal
        trigger={
          <Button size="huge" color="blue">
            Edit Account
          </Button>
        }
        closeIcon
      >
        <Modal.Header>Edit your Account Information</Modal.Header>
        <Modal.Content>
          <EditProfileForm user={user} />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default EditAccount;

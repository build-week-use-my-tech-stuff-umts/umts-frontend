import React from "react";
import { Button, Modal } from "semantic-ui-react";
//This Modal Component

const ConfirmDelete = props => {
  console.log("deleteItemProps", props);
  return (
    <div className="edit-account">
      <Modal
        closeIcon
        size="mini"
        trigger={
          <Button color="red" size="small">
            Delete
          </Button>
        }
      >
        <Modal.Header>Would you like to delete your item?</Modal.Header>
        <Modal.Content>
          <Button
            onClick={() => {
              props.deleteItem(props.rentItem.id).then(() => {
                window.location.reload();
              });
            }}
            type="submit"
            positive
          >
            Yes
          </Button>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ConfirmDelete;

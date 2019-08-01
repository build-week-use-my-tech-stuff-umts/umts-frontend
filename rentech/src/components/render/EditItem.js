
import React, { useState, useEffect } from "react";

import { Button, Modal } from "semantic-ui-react";

import EditItemForm from "../forms/EditItemForm.js";
//This Modal Component

const EditItem = (props) => {
    const [isOpen, setIsOpen] = useState(false); //Pass as props to Editbutton
    const [item, setItem] = useState(props.rentItem)


    useEffect(() => {
            if (props.rentItem !== props.values) {
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        }
    ,[props])
    return (
        <div className="edit-account">
            <Modal
                open={isOpen}
                trigger={<Button
                    onClick={() => setIsOpen(true)}
                    color="blue"
                    size='small' >Edit Item</Button>}>
                <Modal.Header>Edit Item</Modal.Header>
                <Modal.Content>
                    <EditItemForm rentItem={props.rentItem} setClose={setIsOpen} />
                    <Button onClick={() => setIsOpen(false)}>Test close button</Button>
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default EditItem;

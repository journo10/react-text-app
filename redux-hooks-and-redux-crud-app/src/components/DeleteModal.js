import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import { api } from "../api";

const DeleteModal = ({ textDetail }) => {
  const [open, setOpen] = useState(false);
  const [error, setEror] = useState("");
  const show = () => setOpen(true);
  const close = () => setOpen(false);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        setEror("");
        close();
        navigate(`/`);
      })
      .catch(() => {
        setEror("Yazıyı silerken hata oluştu.");
      });
  };

  return (
    <div>
      <Button color="red" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yazıyı Sil</Modal.Header>
        <Modal.Content>
          <p>
            <b>{textDetail.title}</b> başlıklı yazıyı silmek istediğinizden emin
            misiniz?
          </p>
          {error && <p>{error}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            İptal Et
          </Button>
          <Button
            positive
            icon="delete"
            labelPosition="right"
            content="Evet, Sil!"
            onClick={() => handleDelete(textDetail.id)}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default DeleteModal;

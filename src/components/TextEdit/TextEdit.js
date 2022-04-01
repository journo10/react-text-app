import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import TextForm from "../TextForm";

const TextEdit = () => {
  const { id } = useParams();
  const [textEdit, setTextEdit] = useState({});

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((res) => {
        setTextEdit({
          title: res.data.title,
          content: res.data.content,
        });
      });
  }, []);

  return (
    <div>
      <h1>Yazı Düzenle Formu</h1>
      <TextForm textEdit={textEdit} />
    </div>
  );
};

export default TextEdit;

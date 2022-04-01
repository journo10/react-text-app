import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";

const initialState = {
  title: "",
  content: "",
};
const TextForm = ({ textEdit }) => {
  const [text, setText] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handelOnChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    const newText = {
      title: text.title,
      content: text.content,
    };
    //Text Edit
    if (textEdit?.title) {
      api()
        .put(`/posts/${id}`, newText)
        .then((res) => {
          navigate(`/posts/${id}`);
        })
        .catch((error) => {
          setError("Başlık ve yazı içeriği alanları zorunludur.");
        });
    } else {
      // Text Add
      api()
        .post("https://react-yazi-yorum.herokuapp.com/posts", newText)
        .then((res) => {
          navigate("/");
        })
        .catch((error) => {
          setError("Başlık ve yazı içeriği alanları zorunludur.");
        });
    }
  };

  //Text Edit
  useEffect(() => {
    if (textEdit?.title && textEdit?.content) {
      setText(textEdit);
    }
  }, [textEdit]);
  return (
    <>
      {error && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{error}</p>
        </div>
      )}

      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Yazı Başlığı</label>
          <input
            onChange={handelOnChange}
            value={text.title}
            name="title"
            type="text"
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            onChange={handelOnChange}
            value={text.content}
            name="content"
            rows="2"
          ></textarea>
        </div>
        <button className="ui secondary button">Ekle</button>
        <button className="ui button">
          <Link to="/">Anasayfa'ya geri dön</Link>
        </button>
      </form>
    </>
  );
};

export default TextForm;

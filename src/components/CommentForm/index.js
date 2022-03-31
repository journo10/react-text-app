import React, { useState } from "react";

const initialState = {
  display_name: "",
  body: "",
};
const CommentForm = ({ commentsHandleSubmit }) => {
  const [comment, setComment] = useState(initialState);

  const handleOnChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>Yorum Yaz</h3>
      <form
        className="ui form"
        onSubmit={(e) => {
          commentsHandleSubmit(e, comment);
          setComment(initialState)//input'un içinin temizlenmesi
        }}
      >
        <div className="ui mini icon input">
          <input
            onChange={handleOnChange}
            value={comment.display_name}
            name="display_name"
            type="text"
            placeholder="Adınız"
          />
        </div>
        <textarea
          onChange={handleOnChange}
          value={comment.body}
          name="body"
          placeholder="Yorumunuz"
          rows="3"
        ></textarea>
        <button className="ui blue button" type="submit">
          Yorum Gönder
        </button>
      </form>
    </>
  );
};

export default CommentForm;

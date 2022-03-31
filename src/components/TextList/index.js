import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const path = "https://react-yazi-yorum.herokuapp.com/";
const TextList = () => {
  const [textList, setTextList] = useState([]);

  useEffect(() => {
    try {
      getTextListData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getTextListData = async () => {
    const { data } = await axios.get(path + "posts");
    setTextList(data);
  };
  return (
    <div className="ui relaxed divided list">
      {textList.map((text) => (
        <div className="item" key={text.id}>
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <Link to={`/posts/${text.id}`} className="header">
              {text.title}
            </Link>
            <div className="description">{text.created_at}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextList;

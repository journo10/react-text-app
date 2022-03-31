import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextComments from "../TextComments";

const TextDetail = () => {
  const [textDetail, setTextDetail] = useState({});
  const [textCommments, setTextComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAllAxiosData();
  }, []);

  const getAllAxiosData = async () => {
    try {
      await axios
        .all([
          axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
          axios.get(
            `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`
          ),
        ])
        .then((res) => {
          setTextDetail(res[0].data);
          setTextComments(res[1].data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const commentsHandleSubmit = async (e, comment) => {
    e.preventDefault();
    const { data } = await axios.post(
      `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
      comment
    );
    setTextComments([...textCommments, data]); //state array döndüğü için.
  };

  return (
    <>
      <h2 className="ui header">{textDetail.title}</h2>
      <p>{textDetail.created_at}</p>
      <p>{textDetail.content}</p>
      <TextComments
        textCommments={textCommments}
        commentsHandleSubmit={commentsHandleSubmit}
      />
    </>
  );
};

export default TextDetail;

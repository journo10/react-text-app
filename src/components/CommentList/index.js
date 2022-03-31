import React from "react";

const CommentList = ({ textCommments }) => {
  return (
    <>
      <h3>Yorumlar</h3>
      {textCommments.map((tc) => (
        <div className="ui relaxed list" key={tc.id}>
          <div className="item">
            <div className="content">
              <span className="header">{tc.display_name}</span>
              <div className="description">{tc.body}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;

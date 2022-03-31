import React from 'react'
import CommentList from '../CommentList'
import CommentForm from "../CommentForm"

const TextComments = ({textCommments, commentsHandleSubmit}) => {
  return (
    <div>
        <CommentList textCommments = {textCommments} />
        <CommentForm commentsHandleSubmit = {commentsHandleSubmit} />
    </div>
  )
}

export default TextComments
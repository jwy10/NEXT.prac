import React from 'react'
import Post from './Post';
import { useState } from 'react';
import classes from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';

export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  
  function bodyChangeHandler (event) {
    setEnteredBody(event.target.value)
  }

  function authorChangeHandler (event) {
    setEnteredAuthor(event.target.value)
  }

  return (
    <>
    <Modal>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    </Modal>
    <ul className={classes.posts}>
      <Post author={enteredAuthor} body={enteredBody} />
     <Post author='Manuel' body='Check out the  full course' />
    </ul>
    </>
  )
}

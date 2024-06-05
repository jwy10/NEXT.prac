import React from 'react'
import Post from './Post';
import classes from './PostsList.module.css'
import NewPost from './NewPost';

export default function PostsList() {
  return (
    <>
    <NewPost/>
    <ul className={classes.posts}>
      <Post author='Maximilian' body='React is awesome!' />
     <Post author='Manuel' body='Check out the  full course' />
    </ul>
    </>
  )
}

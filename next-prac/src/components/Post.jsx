import React from 'react'
import classes from './Post.module.css'

export default function Post(props) {
  return (
    <div className='post'>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  )
}

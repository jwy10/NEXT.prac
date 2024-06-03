import React from 'react'

const names = ["Maximilian", 'Manuel'];

export default function Post() {
const choosename = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{choosename}</p>
      <p>React.js is awesome!</p>
    </div>
  )
}

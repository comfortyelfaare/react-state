import React from 'react'

function profilecard() {
  return (
    <div className='card'>
    <div className='textgroup'>
    <h3>{Writer.name}</h3>
    <p>{writer.email}</p>
    <p>{writer.phone}</p>
    <button className='actionBnt'>Read more</button>
    </div>
    </div>
  )
}

export default profilecard
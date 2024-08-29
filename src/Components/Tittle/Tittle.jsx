import React from 'react'
import './Tittle.css'

const Tittle = ({subTitle ,Title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{Title}</h2>
    </div>
  )
}

export default Tittle
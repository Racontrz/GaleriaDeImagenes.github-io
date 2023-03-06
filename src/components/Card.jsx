   import React from 'react'

const Card = ({titulo, img, descripcion}) => {
  return (
    <div className='img mg-3'>
      <h3> {titulo} </h3>
      <img src= {img} alt="" />
      <p> {descripcion} </p>
    </div>
  )
}

export default Card

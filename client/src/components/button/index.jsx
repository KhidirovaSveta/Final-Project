import React from 'react'
import "./index.scss"
const Button = ({btnName}) => {
  return (
    <div>
        <button className='shopBtn'> {btnName} </button>
    </div>
  )
}

export default Button
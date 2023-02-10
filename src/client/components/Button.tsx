import React from 'react'

type ButtonProps = {
  buttonText: string
}

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <button>
      <span>{buttonText}</span>
    </button>
  )
}

export default Button

import React from 'react'
import "./button.styles.scss"
function Button({className="",children,...otherProps}) {
  return (
    

    <button className={`button-container ${className}`}
    {...otherProps}
    >
      {children}
    </button>
 
  )
}

export default Button

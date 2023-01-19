import React from 'react'
import "./form-input.styles.scss"
function FormInput({label,className="",...otherProps}) {
   
  return (
    <div className='group'>
      <input 
      className={`form-input ${className}`}
       {...otherProps}
      />
      <label className={`form-input-label ${otherProps.value.length>0?"shrink":""}`} htmlFor={otherProps.id}>{label}</label>
    </div>
  )
}

export default FormInput

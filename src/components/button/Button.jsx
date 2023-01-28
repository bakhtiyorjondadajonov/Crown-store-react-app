import React from 'react'
import { BasicButton,InvertedButton,GoogleSignInButton } from './Button.styles'
import "./button.styles.scss"
const getButton=(className)=>{
  if(className==="inverted")return InvertedButton
  if(className==="google")return GoogleSignInButton
  return BasicButton
}
function Button({className="",children,...otherProps}) {
const CustomButton=getButton(className)
  return (
    <CustomButton className={`${className}`} 
    {...otherProps}
    >
      {children}
    </CustomButton>
 
  )
}

export default Button

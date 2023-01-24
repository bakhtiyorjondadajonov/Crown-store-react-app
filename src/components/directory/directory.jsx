import React from 'react'
import DirectoryItem from '../category-item/directoryItem'
import "./directory.style.scss"
function Directory({directories}) {
  return (
    <div className="directories-container">
    {directories.map((directory )=>{


return (
  <DirectoryItem directory={directory} key={directory.id}/>
)
    })}
    </div>
  )
}

export default Directory

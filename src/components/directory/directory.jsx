import React from 'react'
import DirectoryItem from '../category-item/directoryItem'
import "./directory.style.scss"
const directories=[
  {
    id:1,
    imgUrl:"https://i.ibb.co/cvpntL1/hats.png",
    title:"Hats",
    route:"shop/hats"
  },
  {
    id:2,
    imgUrl:"https://i.ibb.co/px2tCc3/jackets.png",
    title:"Jackets",
    route:"shop/jackets"
  },
  {
    id:3,
    imgUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",
    title:"Sneakers",
    route:"shop/sneakers"
  },
  {
    id:4,
    imgUrl:"https://i.ibb.co/GCCdy8t/womens.png",
    title:"Womens",
    route:""
  },
  {
    id:5,
    imgUrl:"https://i.ibb.co/R70vBrQ/men.png",
    title:"Mens",
    route:"shop/mens"
  },
]
function Directory() {
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

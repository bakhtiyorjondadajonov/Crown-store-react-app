import React from 'react'
import Directory from '../components/directory/directory'
import {Outlet} from "react-router-dom"
function Home() {
    const categories=[
        {
          id:1,
          imgUrl:"https://i.ibb.co/cvpntL1/hats.png",
          title:"Hats"
        },
        {
          id:2,
          imgUrl:"https://i.ibb.co/cvpntL1/hats.png",
          title:"Jackets"
        },
        {
          id:3,
          imgUrl:"https://i.ibb.co/cvpntL1/hats.png",
          title:"Sneakers"
        },
        {
          id:4,
          imgUrl:"https://i.ibb.co/cvpntL1/hats.png",
          title:"Womens"
        },
        {
          id:5,
          imgUrl:"https://i.ibb.co/cvpntL1/hats.png",
          title:"Mens"
        },
      ]
  return (
    <>
    <Outlet/>
      <Directory categories={categories}/>
    </>
  )
}

export default Home

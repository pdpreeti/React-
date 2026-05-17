import React from 'react'
import Section1 from './assets/components/section1/Section1'
import Section2 from './assets/components/section2/Section2'

const App = () => {

  const users= [
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      color: "blue",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:"",
      color: "seagreen",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1546979859-b7d45d499dd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      color: "orange",
      tag:"Underbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      color: "purple",
      tag:"Unsatisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1555421689-43cad7100750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:"",
      color: "crimson",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1541560052-5e137f229371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
      intro:"",
      color: "royalblue",
      tag:"Reserved"
    }
  ]
  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App

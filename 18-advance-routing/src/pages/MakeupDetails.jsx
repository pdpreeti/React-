import React from 'react'
import { useParams } from 'react-router-dom'

const MakeupDetails = () => {

    const params = useParams()

  return (
    <div>
      <h1>{params.id} Makeup Details</h1>
    </div>
  )
}

export default MakeupDetails

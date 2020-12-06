import React from 'react'
import {object} from 'prop-types'

const LocationInfoBox = ({ info }) => {
  const { id, title, date } = info
  return (
    <div className='location__info'>
      <h3>Event Location Info</h3>
      <ul>
        <li>ID: <strong>{id}</strong></li>
        <li>Title: <strong>{title}</strong></li> 
        <li>Date: <strong>{date}</strong></li>
      </ul>
    </div>
  )
}

LocationInfoBox.propTypes = {
  info: object
}

export default LocationInfoBox

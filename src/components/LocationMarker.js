import React from 'react'
import {number, func} from 'prop-types' 
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

//eslint-disable-next-line no-unused-vars
const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location__marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location__icon" />            
    </div>
  )
}

LocationMarker.propTypes = {
  lat: number,
  lng: number,
  onClick: func
}

export default LocationMarker

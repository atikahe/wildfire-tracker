import React from 'react'
import { object, number, array } from 'prop-types'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ center, zoom, eventData }) => {
  const [locationInfo, setLocationInfo] = React.useState(null)

  const markers = eventData.map(event => {
    if (event.categories[0].id === 8) {
      const { coordinates } = event.geometries[0]
      return <LocationMarker
        key={event.id}
        lat={coordinates[1]} 
        lng={coordinates[0]}
        onClick={() => setLocationInfo({ 
          id: event.id, 
          title: event.title,
          date: event.geometries[0].date
        })} 
      />
    }
    return null
  })

  return (
    <div className="map__wrapper">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_APIKEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && 
        <LocationInfoBox info={locationInfo} />
      }
    </div>
  )
}

Map.propTypes = {
  center: object,
  zoom: number,
  eventData: array
}

// Show Oregon by default
Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map
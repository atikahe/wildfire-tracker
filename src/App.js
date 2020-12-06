/* eslint-disable linebreak-style */
import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Map from './components/Map'
import Loader from './components/Loader'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  console.log('eventData', eventData)
  console.log('loading', loading)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      // eslint-disable-next-line no-undef
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events }  = await res.json()
      
      setEventData(events)
    }

    fetchEvents()
  }, [])

  useEffect(() => {
    if (eventData.length > 0) {
      setLoading(false)
    }
  }, [eventData])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  )
}

export default App

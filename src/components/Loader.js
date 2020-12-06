import React from 'react'
import spinner from '../assets/images/spinner.gif'

const Loader = () => {
  return (
    <div className='loader__wrapper'>
      <img className='loader__image' src={spinner} alt='Loading' />
      <p className='loader__text'>Fetching data..</p>
    </div>
  )
}

export default Loader

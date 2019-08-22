import React from 'react'
import PropTypes from 'prop-types'
import PetInfo from '../components/PetInfo'


const Pet = (props) => {
  const pet = props.location.state

  return (
    <div className="Pet">
      <div className="Pet-container">
        <div className="Pet-content">
            <PetInfo pet={pet}></PetInfo>
        </div>
      </div>
    </div>
  )
}

export default Pet

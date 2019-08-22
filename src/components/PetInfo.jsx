import React from 'react'
import PropTypes from 'prop-types'

const PetInfo = (props) => {
  return (
    <div className="PetInfo">
      <div className="PetInfo-container">
        <div className="PetInfo-content">

          <div className="PetInfo-avatar">
            <img src={props.pet.photo} alt={props.pet.name}/>
          </div>

          <div className="PetInfo-profile">

            <h2>{props.pet.name}</h2>
            <span>{props.pet.type === 'dog' ? "dog":"cat"}</span>
            <p>{props.pet.description}</p>
            <i>{props.pet.gender}</i>

            <div className="PetInfo-type">
              <button>Adoptar</button>
            </div>
            <div className="PetInfo-profile-adopt">
              <div className="PetInfo-item">
                <h3>Datos de contacto</h3>
                <span>Dueño:</span>
                <h4>enrique</h4>
                <span>correo:</span>
                <h4>el@correo</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PetInfo

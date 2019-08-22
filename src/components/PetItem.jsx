import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

moment.locale('es');

const PetItem = (props) => {

  const date = moment(props.pet.date,"YYYYMMDD").fromNow();

  return (
    <div className="Pets">
      <div className="Pets-cover" style={{background:`url('${props.pet.photo}')`}}>
        <span>{props.pet.type === 'dog' ? "dog":"cat"}</span>
        {
          props.pet.adopt === true &&
          <div className="Pets-type">
            Adopcion
          </div>
         }
      </div>
      <div className="Pets-content">
        <div className="Pets-head">
            <h2>{props.pet.name}</h2>
            <i>{props.pet.gender}</i>
        </div>
        <p>{props.pet.description}</p>
        <div className="Pets-date">
          <i className="fas fa-calendar-alt"/>
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default PetItem

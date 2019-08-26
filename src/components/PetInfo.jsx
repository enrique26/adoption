import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Login from '../pages/Login'
import { connect } from 'react-redux'

const PetInfo = (props) => {
  const [adopt, setAdopt] = useState(false);

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
              <button className="PetInfo-btn" onClick={() => setAdopt(!adopt)}>Adoptar</button>
            </div>
            {
              adopt &&
              <div>
            {
              props.login ?
              <div className="PetInfo-profile-adopt">
                <div className="PetInfo-item">
                  <h3>Datos de contacto</h3>
                  <span>Dueño:</span>
                  <h4>enrique</h4>
                  <span>correo:</span>
                  <h4>el@correo</h4>
                </div>
              </div>
              :
              <div className="Modal-login">
                <Login></Login>
              </div>
            }
            </div>
          }
          </div>

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    login:state.login
  }
}

export default connect(mapStateToProps)(PetInfo)

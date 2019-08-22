import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {setUser} from '../actions'

const Dashboard = (props) => {
  console.log(props)
  return (
    <div className="Dashboard">
      <div className="Dashboard-container">
        <div className="Dashboard-content">
          <div className="Dashboard-form">
            <Form />
          </div>
          <div className="Dashboard-profile">
            <h2>perfilt</h2>
              <div className="Dashboard-profile-info">
                <img src={props.user.photoURL } alt={props.user.displayName}></img>
                <span>nombre</span>
                <h4>{props.user.displayName}</h4>
                <span>correo:</span>
                <h4>{props.user.email}</h4>
                <button>Cerrar sesión</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const maptStateToProps = (state) =>  {
 return{
   user:state.user
 }
}

const mapDispatchToProps = {
  setUser
}
export default connect(maptStateToProps,mapDispatchToProps)(Dashboard)

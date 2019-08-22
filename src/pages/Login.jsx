import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {auth , provider } from '../utils/firebase'

import { setUser } from '../actions/'

const  Login = (props) => {

  const loginfacebook = () => {
     auth().signInWithPopup(provider)
     .then( ({user}) => {
       console.log(user)
       props.setUser(user);
       props.history.push("/panel")
     });

  }

  const logoutfacebook = () => {
    auth().signOut()
    .then( () => {
      console.log("sesion cerrada")
      props.history.push("/")
    })
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-content">

          <h2>Crear cuenta o iniciar sesión</h2>

          <button onClick={()=>{loginfacebook()}}>
            <i className="fab fa-facebook-square" />
            <span> Iniciar sesión con facebook</span>
          </button>
          <button onClick={()=>{logoutfacebook()}}>
            <span>cerrar sesion</span>
          </button>
        </div>
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  setUser
}

export default connect(null,mapDispatchToProps)(Login)

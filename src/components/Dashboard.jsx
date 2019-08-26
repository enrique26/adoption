import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {auth} from '../utils/firebase'
import {setUser, setLogin} from '../actions'

const Dashboard = (props) => {

  const logoutfacebook = () => {
    auth().signOut()
    .then( () => {
      console.log("sesion cerrada")
      props.setLogin(false)
      props.setUser({})
      props.history.push("/")
    })
  }


  return (
    <div className="Dashboard">
      <div className="Dashboard-container">
        <div className="Dashboard-content">
          <div className="Dashboard-form">
            <Form />
          </div>
          <div className="Dashboard-profile">
            <h2>perfil</h2>
              <div className="Dashboard-profile-info">
                <div>
                  <img src={ props.user != null ? props.user.photoURL:"" } alt={props.user != null ? props.user.displayName:""}></img>
                  <span>nombre</span>
                  <h4>{props.user != null ? props.user.displayName:""}</h4>
                  <span>correo:</span>
                  <h4>{props.user != null ? props.user.email:""}</h4>
                    <button onClick={()=>{logoutfacebook()}}>
                      <span>cerrar sesion</span>
                    </button>
                </div>
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
  setUser,
  setLogin
}
export default connect(maptStateToProps,mapDispatchToProps)(Dashboard)

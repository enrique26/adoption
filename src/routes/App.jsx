import React,{useEffect} from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Layout from '../components/layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login'
import Pet from '../pages/Pet'
import Dashboard from '../components/Dashboard'
import {auth} from '../utils/firebase'
import { setUser,setLogin } from '../actions'
import {connect} from 'react-redux'
import '../styles/global.css'

const App = props => {

  useEffect( ()=>{/* te permite acceder a cualquier prop desde el efecto*/
    auth().onAuthStateChanged( (user)=>{
      if(user){
        props.setUser(user)
        props.setLogin(true)
      }
    } )
  },[] )

  return (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mascotas/:id" component={Pet} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/panel" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>

    </Layout>
  </BrowserRouter>
)};

const mapDispatchToProps = {
  setUser,
  setLogin
}
export default connect(null,mapDispatchToProps)(App);

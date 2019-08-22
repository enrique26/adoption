import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/panel">
            Dar en adopcion
          </Link>
        </li>
        <li>
          <Link to="/login">
            mi cuenta
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav

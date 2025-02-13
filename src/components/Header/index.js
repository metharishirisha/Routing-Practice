// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <ul className="wave-logo-and-heading">
      <li>
        <h1 className="wave-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="wave-logo"
          />
          Wave
        </h1>
      </li>
    </ul>
    <ul className="nav-menu">
      <li className="menu-details">
        <Link className="link-element" to="/">
          Home
        </Link>
      </li>
      <li className="menu-details">
        <Link className="link-element" to="/about">
          About
        </Link>
      </li>
      <li className="menu-details">
        <Link className="link-element" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

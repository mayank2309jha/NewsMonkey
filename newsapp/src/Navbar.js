import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {}


  render() {
    return (
      <div style ={{color: "white"}}>
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link bg-dark text-white" to="/Business">Business</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Entertainment">Entertainment</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/General">General</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Health">Health</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Science">Science</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Sports">Sports</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Technology">Technology</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
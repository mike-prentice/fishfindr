import React from 'react';
import { Link } from 'react-router-dom';

class navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about">
                <a class="nav-link" href="/about">
                  About
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default navbar;

import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Router>
        <div className="logo">
          <h3>旅行のしおり</h3>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <a href="#">しおり</a>
            </li>
          </ul>
        </nav>
      </Router>
    </header>
  )
}

export default Header;

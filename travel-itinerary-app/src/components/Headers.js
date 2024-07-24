import React from 'react'
import { Link } from 'react-router-dom';

const Headers = () => {
  return (
    <header className="mb-3">
        <div className="logo">
          <h3>旅行のしおり</h3>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <a href="/#">しおり</a>
            </li>
          </ul>
        </nav>     
    </header>
  )
}

export default Headers;

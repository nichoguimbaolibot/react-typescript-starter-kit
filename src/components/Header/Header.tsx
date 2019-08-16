import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from 'appRoot/App.context';

const Header = () => {
  const { isLoggedIn, onLogin, onLogout } = React.useContext(AppContext);

  return (
    <section className="header-section">
      {isLoggedIn ? (
        <>
          <ul className="navigation">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>

            <li className="list-item">
              <Link to="/test">Test</Link>
            </li>

            <li className="list-item">
              <button onClick={onLogout}> Logout </button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <h2>Logout</h2>

          <button onClick={onLogin}> Login </button>
        </>
      )}
    </section>
  );
};

export default Header;

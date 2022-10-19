import { React, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  let location = useLocation();
  const Navigation= useNavigate();

  useEffect(() => {
    console.log();
  }, [location]);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    Navigation('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/"><strong>Home</strong></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about"><strong>About</strong></Link>
            </li>
          </ul>
          {
            !localStorage.getItem('token') ?
              <form className="d-flex" role="search">

                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up</Link>
              </form> : <button type='submit' className="btn btn-primary mx-1" onClick={handleLogout} role="button">Logout</button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
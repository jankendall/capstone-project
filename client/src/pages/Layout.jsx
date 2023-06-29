import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {

  const location = useLocation();

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">SnowTech</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link to="/" className={`nav-link ${ (location.pathname === `/`) ? `fw-bold active`: ``}`}>Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className={`nav-link ${ (location.pathname === `/about`) ? `fw-bold active`: ``}`}>About</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact" className={`nav-link ${ (location.pathname === `/contact`) ? `fw-bold active`: ``}`}>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
      </nav>


      <Outlet />


      {/* Footer */}
      <div className="bg-dark text-white p-3" id="footer">
        <div className="row">
            <p className="fw-bold">SnowTech</p>
            <p>Manila, Philippines
                <br />All rights reserved.
            </p>
        </div>
      </div>
      
    </div>
  );
}

export default Layout;

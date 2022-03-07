import './App.css';
import Main from './component/Main';
import {Switch, Route, Router, NavLink } from "react-router-dom"


function App() {
  return (
    <>
      <div>
            <nav className="navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid ms-5">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        t.PAY
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-3 mb-lg-0 me-5">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/student">Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/class">Class</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tuition">Tuition</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/transaction">Transaction</NavLink>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
          <p><Main/></p>
        </div>
      
    </>
  );
}

export default App;

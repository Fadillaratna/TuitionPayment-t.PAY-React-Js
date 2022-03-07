import React from 'react';
import { NavLink } from 'react-router-dom';
import "./home.css"

const Home = () => {
    return (
        <div className="dashboard ms-5">
                    <p className='location-header'>SPP APP/ Dashboard Admin</p>
                    <br></br><br></br><br></br><br></br>
                            <h5 className="card-title display-3 fw-bolder mb-0">HELLO,</h5>
                            <p className="card-text lead fs-2 mb-0">WELCOME TO t.PAY APP</p>
                            <p className="card-text lead mb-5">Pay easy, fast and modern</p>

                    <NavLink to="/transaction" className="btn btn-dark me-3">Show History Transaction</NavLink>
                    <NavLink to="/transaction" className="btn btn-outline-dark">Check Payment Report</NavLink>

                  
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        
        
    );
};

export default Home;
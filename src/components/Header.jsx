import React from 'react'
import logo from '../assets/qht-logo-final.png';

const Header = () => {
    return (
        <>
            <div className='container-fluid' style={{ backgroundColor: "#f0f6f2" }}>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid py-5 px-5 justify-content-center">
                            <div className='row w-100 p-0'>
                                <div className='col-md-6 d-flex justify-content-start align-items-center'>
                                    <a className="navbar-brand" href="#"><img src={logo} width="130" style={{ filter: "invert(1)" }} alt="" /></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end align-items-center collapse navbar-collapse p-0" id="navbarSupportedContent">
                                    <ul className="navbar-nav bg-white p-2 rounded align-items-center gap-2 ps-3">
                                        <li className="nav-item">
                                            <a className="nav-link fw-500 text-dark" href="#">About us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fw-500 text-dark" href="#">Hair Transplant Result</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fw-500 text-dark" href="#">Hair Restoration</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fw-500 text-dark" href="#">Cost</a>
                                        </li>
                                        <li>
                                            <button className='btn text-white p-3 primary-bg'>Contact Us</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
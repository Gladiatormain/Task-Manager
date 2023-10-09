// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import '.././App.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-light">
                <a class="logo" href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5EfSMCj5UF9EaBjgnmkUQXynRG1Lj80vkQ&usqp=CAU"  alt=""/>
                </a>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">iNoteBook</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-NavLink" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/myprofile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/logout">Logout</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to="/register">Register</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
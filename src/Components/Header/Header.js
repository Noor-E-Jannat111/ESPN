import React from 'react';
import { Link } from 'react-router-dom';
import logos from '../../Photo/Logo.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navBg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> 
                        <img src={logos} alt="" style={{width:'120px'}}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/details">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/matches">Matches</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/players">Players</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header; 
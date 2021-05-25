import React from 'react';
import './Login.css';
import facebook from '../../images/facebook.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <img src={facebook} alt="" className="login-logo" />
            <div className="login-container">
                <h3>Login To Facebook</h3>
                <form>
                    <center>
                        <input type="email" placeholder="Email address or phone number" />
                    </center>
                    <center>
                        <input type="password" placeholder="Password" />
                    </center>
                    <center>
                        <button type="submit" className="login-button"> Login</button>
                    </center>
                    <center className="last-info">
                        <h5>Forgotten Password ?</h5>
                        <h4 className="dot">.</h4>
                        <Link to="/register" style={{textDecoration: 'none'}}>
                            <h5 className="sign-up">Sign Up for Facebook</h5>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default Login;
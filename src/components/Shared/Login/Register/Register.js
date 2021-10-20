import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';

const Register = () => {
    const { SignInWithGoogle, handleRegstation, handleEmailChange, handlePasswordChange, error } = useAuth();
    return (
        <>
            <form onSubmit={handleRegstation}>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <img src="https://image.freepik.com/free-vector/online-registration-sign-up-login-account-smartphone-app-user-interface-with-secure-password-mobile-application-ui-web-banner-access-cartoon-people-vector-illustration_2175-1060.jpg" alt="Avatar" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center"><i className="fas fa-registered"></i> Register Please</h2>

                            <label htmlFor="uname"><b>Email</b></label>
                            <input onBlur={handleEmailChange} type="email" placeholder="Enter email" name="email" required />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input onBlur={handlePasswordChange} type="password" placeholder="Enter Password" name="psw" required />
                            <div className="row mb-3 text-danger">{error}</div>
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary"><i className="fas fa-registered"></i>  Sign Up</button>
                                <button onClick={SignInWithGoogle} type="button" className="btn btn-success">
                                    <i className="fab fa-google"></i> Google Sign Up
                                </button>
                                <button type="button" className="btn btn-info"><i className="fab fa-github"></i> Github Sign Up</button>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="psw">Already <Link to="/login">Registered?</Link></span>
                                <span className="psw">Forgot <Link to="/register">password?</Link></span>
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </>
    );
};

export default Register;
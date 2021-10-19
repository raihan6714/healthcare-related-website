import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hook/useFirebase';
import './Login.css';
const Login = () => {
    const { SignInWithGoogle } = useFirebase();
    return (
        <>
            <form>
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <img src="https://i.ibb.co/8zrDtYr/secure-login-concept-illustration-114360-4685-1.jpg" alt="Avatar" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <h2 className="text-center"><i className="fas fa-sign-in-alt"></i> Login Please</h2>
                            <label htmlFor="uname"><b>Email</b></label>
                            <input type="email" placeholder="Enter email" name="email" required />
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Login</button>

                                <button type="button" className="btn btn-success" onClick={SignInWithGoogle}><i className="fab fa-google"></i> Google Sign In</button>

                                <button type="button" className="btn btn-info"><i className="fab fa-github"></i> Github Sign In</button>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="psw">New <Link to="/register">User?</Link></span>
                                <span className="psw">Forgot <Link to="/login">password?</Link></span>
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </>
    );
};

export default Login;
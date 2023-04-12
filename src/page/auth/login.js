import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveAuth } from "../../store/reducer";
import "../../styles/auth.css";
import API from "../../api";
import { FaEyeSlash, FaUser } from 'react-icons/fa';

import './auth.css';
import Menu from "../../components/menu";
export default function Login() {
    const [mode, setMode] = useState(1);

    return (
        <div className="">
            <Menu />
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="p-2 flex-grow">
                    <div className="smallContainer border shadow rounded">
                        <div className="row g-0">
                            <div className="col-sm-6 col-xs-12 d-none d-sm-block position-relative" id='leftCol'>
                                <img src="/main.jpg" className="h-100" />
                                <div id="pt-5 text-end w-100" className="position-absolute end-0 top-0">
                                    <span href="#" className={"customBtn " + (mode == 1 ? "activeBtn" : "")} onClick={() => { setMode(1) }}>Login</span><br />
                                    <span href="#" className={"customBtn " + (mode == 2 ? "activeBtn" : "")} onClick={() => { setMode(2) }}>signup</span>
                                </div>

                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="d-flex flex-column h-100" >

                                    <div className="text-center d-sm-none d-xs-block">
                                        <div className="switch-button">
                                            <input className="switch-button-checkbox" type="checkbox"></input>
                                            <label className="switch-button-label" for=""><span className="switch-button-label-span">Login</span></label>
                                        </div>
                                    </div>
                                    {
                                        mode == 1 ?
                                            <div className="my-auto p-5">
                                                <div className="text-center">
                                                    <div>
                                                        <img src="/logo.png" height="72" />
                                                    </div>
                                                    <h2 className="h3 pb-3">LOGIN</h2>
                                                </div>
                                                <form>
                                                    <div className="position-relative my-3 inputGroup text-center">
                                                        <span className="position-absolute icon"> <FaUser size={22} /> </span>
                                                        <input type="email" className="border-0 border-bottom w-100" placeholder="Enter Email Address" />
                                                    </div>
                                                    <div className="position-relative my-3 inputGroup text-center">
                                                        <span className="position-absolute icon"> <FaEyeSlash size={22} /> </span>
                                                        <input type="password" className="border-0 border-bottom w-100" placeholder="Password" />
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between pt-2">
                                                        <a className="linkFlare" href="#"><small>Forgot Password?</small></a>
                                                        <button className="btn btn-accent px-4 rounded-pill">LOGIN</button>
                                                    </div>
                                                </form>
                                            </div>
                                            :
                                            <div className="my-auto p-5">
                                                <div className="text-center">
                                                    <div>
                                                        <img alt="" src="/logo.png" height="72" />
                                                    </div>
                                                    <h2 className="h3 pb-3">Signup</h2>
                                                </div>
                                                <form>
                                                    <div className="position-relative my-3 inputGroup text-center">
                                                        <span className="position-absolute icon"> <FaUser size={22} /> </span>
                                                        <input type="email" name="email" className="border-0 border-bottom w-100" placeholder="Enter Email Address" />
                                                    </div>
                                                    <div className="position-relative my-3 inputGroup text-center">
                                                        <span className="position-absolute icon"> <FaEyeSlash size={22} /> </span>
                                                        <input type="password" name="password" required className="border-0 border-bottom w-100" placeholder="Password" />
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between pt-2">
                                                        <Link className="linkFlare" href="#"><small>Forgot Password?</small></Link>
                                                        <button className="btn btn-accent px-4 rounded-pill">LOGIN</button>
                                                    </div>
                                                </form>
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
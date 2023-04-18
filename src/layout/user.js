import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Menu from "../components/menu";
import { logout } from "../store/reducer";

export default function UserLayout() {


    const logged = useSelector((state) => state.donation.logged);
    const user = useSelector((state) => state.donation.user);
    const dispatch=useDispatch();

    if (!logged) {
        return <Navigate to="/login" />;
    } else {
        return (
            <div >
                <Menu />
                <div>
                    <div className="container pt-5">

                        <div className="row">

                            <div className="col-md-3">
                                <div className="shadow p-2">

                                    <div>
                                        {user.name} <br />
                                        {user.email} a
                                    </div>
                                    <hr />
                                    <div>
                                        <Link to="/user/donations">My Donations</Link>
                                    </div>
                                    <hr />
                                    <div>
                                        <a onClick={()=>{dispatch(logout())}}>Logout</a>
                                    </div>
                                    <hr />


                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="shadow p-3" style={{minHeight:"400px"}}>
                                    <Outlet/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
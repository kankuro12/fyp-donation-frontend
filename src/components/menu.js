import { Link } from 'react-router-dom';
import './components.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaBars, FaCross, FaHamburger, FaTimes } from 'react-icons/fa';
export default function Menu() {
    const logged = useSelector((state) => state.donation.logged);
    const user = useSelector((state) => state.donation.user);
    const ismob = window.innerWidth <= 425;
    const [show, setshow] = useState(false);
    const hide = () => {
        setshow(false);
    }
    return (

        ismob ?
            <div className="mobilemenu">
                <div className='mobilemenu-header d-flex justify-content-between px-3'>
                    <span>Logo</span>
                    <span onClick={()=>setshow(!show)}>
                        {
                            show?
                            <FaTimes ></FaTimes>
                            : 
                            <FaBars></FaBars>
                        }
                    </span>
                </div>
                {
                    show ? <div className="mobilemenu-sidebar px-3">
                        <Link className="link" onClick={() => { hide(); }} to="/home">Home</Link>
                        <Link className="link" onClick={() => { hide(); }}  to="/about">About</Link>
                        <Link className="link" onClick={() => { hide(); }}  to="/orgs">Organizations</Link>
                        <Link className="link" onClick={() => { hide(); }}  to="/faq">Faqs</Link>
                        <Link className="link" onClick={() => { hide(); }}  to="/social">social</Link>
                        <Link className="link" onClick={() => { hide(); }}  to="/contactus">Contact Us</Link>
                    </div> : ""
                }

            </div>
            :
            <div className="  Menu">
                <div className="">

                    <div className="d-flex ">
                        <div className="parts col-md-2">Logo</div>
                        <div className="parts col-md-7 text-center">
                            <Link className="link" to="/home">Home</Link>
                            <Link className="link" to="/about">About</Link>
                            <Link className="link" to="/orgs">Organizations</Link>
                            <Link className="link" to="/faq">Faqs</Link>
                            <Link className="link" to="/social">social</Link>
                            <Link className="link" to="/contactus">Contact Us</Link>
                        </div>
                        {

                            logged ?

                                user.role == 'admin'
                                    ? <div className="parts col text-end">
                                        <Link className="link" to="/admin">Admin Panel </Link>
                                    </div>
                                    : <div className="parts col text-end">
                                        <Link className="link" to="/user"> Hello!! {user.name}</Link>
                                        <Link className="link" to="/user/donate">Donate Now</Link>
                                    </div>
                                :

                                <div className="parts col-md-3 text-end">
                                    <Link className="link" to="/login">Log In / Register</Link>
                                    <Link className="link" to="/user/donate">Donate Now</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>


    );
}
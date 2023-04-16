import { Link } from 'react-router-dom';
import './components.css';
import { useSelector } from 'react-redux';
export default function Menu(){
    const logged= useSelector((state) => state.donation.logged);
    const user= useSelector((state) => state.donation.user);
    return (
        <div className="  Menu">
            <div className="">

            <div className="d-flex ">
                <div className="parts col">Logo</div>
                <div className="parts col text-center">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/home">About</Link>
                    <Link className="link" to="/home">Organizations</Link>
                    <Link className="link" to="/home">Contact Us</Link>
                </div>
                    {
                        
                        logged?
                            
                            user.role=='admin'
                            ?<div className="parts col text-end">
                                <Link className="link" to="/admin">Admin Panel </Link>
                            </div>
                            :<div className="parts col text-end">
                                <Link className="link" to="/user"> Hello!! {user.name}</Link>
                                <Link className="link" to="/user/donate">Donate Now</Link>
                            </div>
                        :

                        <div className="parts col text-end">
                            <Link className="link" to="/login">Log In / Register</Link>
                            <Link className="link" to="/user/donate">Donate Now</Link>
                        </div>
                    }
            </div>
            </div>
        </div>
    );
}
import { Link } from 'react-router-dom';
import './components.css';
export default function Menu(){
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
                <div className="parts col text-end">
                    <Link className="link" to="/login">Log In / Register</Link>
                    <Link className="link" to="/home">Donate Now</Link>
                </div>
            </div>
            </div>
        </div>
    );
}
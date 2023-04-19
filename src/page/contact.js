import { FaFacebook, FaInstagram, FaTwitter, FaYoutubeSquare } from "react-icons/fa";
import Menu from "../components/menu";

export default function ContactPage() {
    return (<div>
        <Menu />
        <div className="container py-5">

                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>

                            <h3>
                                <span style={{fontWeight:"700"}}>Contact</span>
                                <span className="ms-3">Us</span>
                            </h3>
                            <p style={{textAlign:"justify"}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nam corporis omnis facere quo soluta similique corrupti! Eum est ducimus, nihil eius possimus consectetur aspernatur aliquid veniam quisquam, iure debitis.
                            </p>
                            <div className="row">
                                <div className="col-md-5">
                                    <a className="btn w-100 text-white" href="tel:9898989898" style={{background:"#ED6B4B",padding:"10px",borderRadius:"10px"}}>
                                        Give Us A Call
                                    </a>
                                </div>
                                <div className="col-md-7 text-end text-white">
                                        <a href="facebook" className="btn btn-square social me-3">
                                            <FaFacebook ></FaFacebook>
                                        </a>
                                        <a href="facebook" className="btn btn-square social me-3">
                                            <FaInstagram ></FaInstagram>
                                        </a>
                                        <a href="facebook" className="btn btn-square social me-3">
                                            <FaTwitter ></FaTwitter>
                                        </a>
                                        <a href="facebook" className="btn btn-square social me-3">
                                            <FaYoutubeSquare ></FaYoutubeSquare>
                                        </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6"> 
                        <img src="/logo-fb.jpg"  className="w-100" alt=""/>
                    </div>
            </div>
        </div>
    </div>);
}
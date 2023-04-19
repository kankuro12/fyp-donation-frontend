import { FaAward, FaHourglass, FaUserFriends, FaWarehouse } from "react-icons/fa";
import Menu from "../components/menu";

export default function AboutPage(){
    return (
        <div>
            <div className="landing-holder" >

                <Menu/>
                <div className="py-5" style={{background:"#D8D9D5"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="/main.jpg" className="w-100 pb-5" alt=""/>

                                <img src="/main.jpg" className="w-100" alt=""/>

                            </div>
                            <div className="col-md-7 pt-5 ">
                                <div className="ps-5">
                                    <h3 style={{fontWeight:"700"}}>Title</h3>
                                    <div style={{color:"#707371"}}>

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sequi perspiciatis eos necessitatibus animi asperiores voluptate hic officia quis minus a non, cum adipisci beatae aliquid quia sint eum consequuntur!
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sequi perspiciatis eos necessitatibus animi asperiores voluptate hic officia quis minus a non, cum adipisci beatae aliquid quia sint eum consequuntur!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{background:"#E9DEC2",color:"#52432a"}}>
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <FaHourglass size={38}></FaHourglass>
                                    </div>
                                    <div className="col-6" style={{borderRight:"1px solid #715D3B"}}>
                                        <h4 className="mb-1" style={{fontWeight:700}}>10+</h4>
                                        <div>Years</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <FaUserFriends size={38}></FaUserFriends>
                                    </div>
                                    <div className="col-6" style={{borderRight:"1px solid #715D3B"}}>
                                        <h4 className="mb-1" style={{fontWeight:700}}>100+</h4>
                                        <div>People</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <FaAward size={38}></FaAward>
                                    </div>
                                    <div className="col-6" style={{borderRight:"1px solid #715D3B"}}>
                                        <h4 className="mb-1" style={{fontWeight:700}}>30+</h4>
                                        <div>Awards</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <FaWarehouse size={38}></FaWarehouse>
                                    </div>
                                    <div className="col-6">
                                        <h4 className="mb-1" style={{fontWeight:700}}>500+</h4>
                                        <div>Donations</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
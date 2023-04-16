import { useState } from "react";
import API from "../../api";

export default function UserDonate(){
    const [data,getData]=useState(null);
    
    const loadData=()=>{
        API.get("general/donate")
    };
    return (
        <div>
               <h5>Donation</h5> 
               <hr />
               <div className="shadow">

               </div>

        </div>
    );
}
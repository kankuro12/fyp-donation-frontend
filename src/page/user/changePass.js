export default function ChangePass(){
    
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="oldpassword">Old Password</label>
                        <input type="oldpassword" name="oldpassword" id="oldpassword" className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    );
}
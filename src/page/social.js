import Menu from "../components/menu";

export default function Social(){
    return (
        <div>
        <Menu />

        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <h3>Social Cause</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequuntur laboriosam sit ut illum alias optio nulla, est dolor sint quia eius corporis totam nihil aliquam? Non dolorem recusandae aut.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus quasi explicabo alias ipsum. Doloribus ullam autem, libero architecto iusto error. Praesentium, minus doloribus cumque vel animi voluptates doloremque saepe?
                    </p>
                </div>
                <div className="col-md-4">
                    <img src="/logo-fb.jpg" alt="" className="w-100" />
                </div>
            </div>
        </div>
        </div>
    )
}
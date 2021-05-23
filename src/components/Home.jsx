import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="text-center mt-5">
            <h3 className="font-weight-bold">Welcome to আমার Manager Version 1.0</h3>
            <Link className="btn btn-primary" to="/product">GET STARTED <i className="fa fa-long-arrow-alt-right"></i></Link>
        </div>
    );
}

export default Home;
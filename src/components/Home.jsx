// import { Link } from "react-router-dom";

const Home = () => {
    const setData = () =>{
        console.log("Shuvo love programming");
    }
    return(
        <div className="text-center mt-5">
            <h3 className="font-weight-bold">Welcome to আমার Manager Version 1.0</h3>
            <button onClick={setData} className="btn btn-primary" >GET STARTED <i className="fa fa-long-arrow-alt-right"></i></button>
        </div>
    );
}

export default Home;
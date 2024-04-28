import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { Helmet } from "react-helmet";


const PrivateRoute = ({children}) => {
    console.log(children)
    const {user,loading}=useAuth();
    const location =useLocation();

    if(!user){
        return <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div >
           
             <Helmet><title>Luxary State | view property</title></Helmet>
            {children}
        </div>
    );
};

export default PrivateRoute;
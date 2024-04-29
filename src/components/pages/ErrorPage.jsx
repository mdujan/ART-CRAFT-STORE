import { Helmet } from "react-helmet";


const ErrorPage = () => {
    return (
        <div>
        <Helmet><title> Art & Craft | 404not Found</title></Helmet>
        <img className='h-[30%] w-[70%] mx-auto' src={logo} alt="" />
        <h3>ERROR</h3>
    </div>
    );
};

export default ErrorPage;
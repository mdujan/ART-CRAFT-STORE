import { Link } from "react-router-dom";

const itemsCard = ({item}) => {


    
    const {image,_id}=item;
    return (
        <div>
            <img src={image} className="w-[19%]" alt="" />
            <Link to={`/details/${_id}`}><button className="btn">View Details</button></Link>
        </div>
    );
};

export default itemsCard;
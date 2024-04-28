import { useLoaderData } from "react-router-dom";
import ItemsCard from "../ItemsCard";


const Home = () => {
    const items = useLoaderData();
    return (
        <div>
            <div className="mx-auto w-[19%] text-3xl font-bold">
                <h1 >
                    CRAFT Items 
                </h1>
            </div>
                {
                    items.map(item=> <ItemsCard 
                    key={item._id}
                    item={item}
                    ></ItemsCard>)
                }
        </div>
    );
};

export default Home;
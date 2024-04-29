import { useLoaderData } from "react-router-dom";
import EveryItem from "../EveryItem";


const Allitems = () => {
  const items = useLoaderData();
  console.log(items)
    return (
        <div>
          <h1 className="mx-auto w-[19%] text-3xl font-bold">All items</h1>
          {
                    items.map(item=> <EveryItem 
                    key={item._id}
                    item={item}
                    ></EveryItem>)
                }
        </div>
    );
};

export default Allitems;
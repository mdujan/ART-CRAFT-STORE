import Swal from 'sweetalert2'
import useAuth from '../../Hook/useAuth';
import { Helmet } from 'react-helmet';


const Additem = () => {
    const {user}=useAuth()

const handleAddItem =  event =>{
event.preventDefault();

const form= event.target;

const image = form.image.value; 
const item_name = form.item_name.value; 
const subcategory_name = form.subcategory_name.value; 
const short_description= form.short_description.value; 
const price= form.price.value; 
const rating = form.rating.value; 
const processing_time = form.processing_time.value; 
const stock_status = form.stock_status.value; 
const customization = form.customization.value; 
// const user_email = form.user_email.value; 
const user_name = form.user_name.value; 
const email =user.email;

const newItem = {image,item_name,subcategory_name,short_description,price,rating,customization,processing_time,stock_status,user_name,email}
console.log(newItem);
// send data to the server:->
fetch('https://b9-a10-store-server-nine.vercel.app/item',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newItem)
})
.then(res=> res.json())
.then(data=>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'user added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
    }
})
} 




    return (
        
        <section className="p-6 mx-28 rounded-xl dark:bg-gray-100 dark:text-gray-900 bg-purple-300">
         <div><h1 className="mt-6 mb-5 mx-auto w-[19%] font-bold text-4xl ">View Item</h1>
<hr  className="bg-black w-[29%] mx-auto "/></div>   
            <Helmet><title>Art & Crft | add items</title></Helmet>
        <form onSubmit={handleAddItem} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
            <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                {/* <!-- Personal Information --> */}
                <div className="space-y-2 col-span-full lg:col-span-1">
                    
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    {/* <!-- Image URL --> */}
                    <div className="col-span-full">
                        <label htmlFor="image" className="text-sm">Image URL</label>
                        <input id="image" type="url" name="image" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Item Name --> */}
                    <div className="col-span-full">
                        <label htmlFor="item_name" className="text-sm">Item Name</label>
                        <input id="item_name" type="text" name="item_name" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Subcategory Name --> */}
                    <div className="col-span-full">
                        <label htmlFor="subcategory_name" className="text-sm">Subcategory Name</label>
                        <input id="subcategory_name" type="text" name="subcategory_name" placeholder="Subcategory Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Short Description --> */}
                    <div className="col-span-full">
                        <label htmlFor="short_description" className="text-sm">Short Description</label>
                        <textarea id="short_description" name="short_description" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                    </div>
                    {/* <!-- Price --> */}
                    <div className="col-span-full">
                        <label htmlFor="price" className="text-sm">Price</label>
                        <input id="price" type="number" name="price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Rating --> */}
                    <div className="col-span-full">
                        <label htmlFor="rating" className="text-sm">Rating</label>
                        <input id="rating" type="number" name="rating" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Customization --> */}
                    <div className="col-span-full">
                        <label className="text-sm">Customization</label>
                        <div className="flex items-center space-x-4">
                            <label htmlFor="customization_yes" className="flex items-center">
                                <input id="customization_yes" type="radio" name="customization" value="yes" className="rounded-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label htmlFor="customization_no" className="flex items-center">
                                <input id="customization_no" type="radio" name="customization" value="no" className="rounded-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>
                    {/* <!-- Processing Time --> */}
                    <div className="col-span-full">
                        <label htmlFor="processing_time" className="text-sm">Processing Time</label>
                        <input id="processing_time" type="text" name="processing_time" placeholder="Processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Stock Status --> */}
                    <div className="col-span-full">
                        <label htmlFor="stock_status" className="text-sm">Stock Status</label>
                        <select id="stock_status" name="stock_status" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                            <option value="in_stock">In Stock</option>
                            <option value="made_to_order">Made to Order</option>
                        </select>
                    </div>
                    {/* <!-- User Email --> */}
                    {/* <div className="col-span-full">
                        <label htmlFor="user_email" className="text-sm">User Email</label>
                        <input id="user_email" type="email" name="user_email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div> */}
                    {/* <!-- User Name --> */}
                    <div className="col-span-full">
                        <label htmlFor="user_name" className="text-sm">User Name</label>
                        <input id="user_name" type="text" name="user_name" placeholder="User Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    {/* <!-- Add Button --> */}
                    <div className="col-span-full">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Add</button>
                    </div>
                </div>
            </div>
        </form>
    </section>
    
    );
};

export default Additem;

const itemsCard = ({item}) => {
    const {image}=item;
    return (
        <div>
            <img src={image} className="w-[19%]" alt="" />
        </div>
    );
};

export default itemsCard;
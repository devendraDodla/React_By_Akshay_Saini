import { CDN_IMAGE } from "../utils/constants";
const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((res) => (
                <div key = {res.card.info.id} className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{res.card.info.name}</span>
                            <span> - ₹{res.card.info.price ? res.card.info.price / 100 : res.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{res.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-2">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"> Add + </button>
                        </div>
                        <img src={`${CDN_IMAGE}/${res.card.info.imageId}`}></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((res) => (
                <div key = {res.card.info.id} className="p-2 m-2 border-grey-200 border-b-2 text-left">
                    <div>
                        <span className="font-bold">{res.card.info.name}</span>
                        <span> - ₹{res.card.info.price ? res.card.info.price / 100 : res.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{res.card.info.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
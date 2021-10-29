import React, {useEffect, useState} from 'react';
import ShopItem from "../components/ShopItem";

const Shop = () => {

    useEffect( () => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://6171918fc20f3a001705fdf5.mockapi.io/users')

        const items = await data.json()
        setItems(items)
    }

    return (
        <div>
            <h1>Shop</h1>
            {items.map((item) => <ShopItem key={item.id} {...item}/>)}
        </div>
    );
};

export default Shop;
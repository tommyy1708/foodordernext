import React from "react";
import Cards from "./Cards";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/addcartslice';


export default function MenuContent({MENU_ITERMS}) {
    
    const dispatch = useDispatch();
    const handleAddToCart = (item) =>{
        const {key,name,prices,category} = item;
        dispatch(addItem({ key,name,prices,category,amount:1}));
    }
  
    return (
        <div className="layout_left">
            <div className="products_continer">
                {MENU_ITERMS?.map((item) => (
                    <Cards key={item.key} item={item} handleAddToCart={handleAddToCart}/>
                ))}
            </div>
        </div>
    );
}


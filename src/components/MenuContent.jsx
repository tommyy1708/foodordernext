import Image from "next/image";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/addcartslice';


export default function MenuContent({MENU_ITERMS}) {
    const [menuContent, setMenuContent] = useState([])
    const dispatch = useDispatch();
    const handleAddToCart = (item) =>{
        const {key,name,prices,category} = item;
        dispatch(addItem({ key,name,prices,category}));
    }
  
    return (
        <>
            <div className="products-container">
                {/* Menu content below */}
                {MENU_ITERMS?.map((item) => (
                    <Cards key={item.key} item={item} handleAddToCart={handleAddToCart}/>
                ))}
            </div>


            <style jsx>{`
                ul{
                    width:70vw;
                    display:flex;
                    flex-wrap:wrap;
                }
                li{
                    padding:10px;
                    list-style-type:none;
               }`
            }
            </style>
        </>
    );
}


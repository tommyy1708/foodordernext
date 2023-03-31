import React, { useState } from "react";
import Cards from "./Cards";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/addcartslice';
import Pop from './Pop'

export default function MenuContent({ MENU_ITEMS }) {
    const [showModal, setShowModal] = useState(false);
    const [comboItem, setComboItem] = useState();
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        const { key, name, prices, category } = item;
        if (item.category === 'combo') {
            setShowModal(true);
            setComboItem(item);
        } else {
            dispatch(addItem({ key, name, prices, category, amount: 1 }));
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalConfirm = (newItem) => {
        const { key, name, prices, category, rice, side } = newItem;
        dispatch(addItem({ key, name, prices, category, amount: 1 }));
    };
    return (
        <div className="layout_left">
            <div className="products_container">
                {MENU_ITEMS?.map((item) => (
                    <Cards key={item.key} item={item} handleAddToCart={handleAddToCart} />
                ))}
                {showModal && (
                    <Pop onClose={handleModalClose} onConfirm={handleModalConfirm} comboItem={comboItem} isOpen={showModal}>
                    </Pop>
                )}
            </div>
        </div>
    );
}


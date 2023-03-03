import React from 'react';
import MenuContent from '../components/MenuContent';
import ShoppingCart from "../components/ShoppingCart";

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:9000/manage/menu');
    const menus = await res.json();

    const paths = menus.data?.map(item => {
        return {
            params: { category: item.category.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const categoryName = context.params.category;
    const res1 = await fetch('http://localhost:9000/manage/' + categoryName);
    const data1 = await res1.json();
    return {
        props: { MENU_ITERMS: data1 }
    }
}

const Name = ({ MENU_ITERMS }) => {
    const { data } = MENU_ITERMS;
    return (
        <div className='main-content'>
            <div className='products-container'>
                <MenuContent className={'content'} MENU_ITERMS={data} />
            </div>
            <div className='layout_sidebar'>
                <ShoppingCart />
            </div>
        </div>

    );
}

export default Name;

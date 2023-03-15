import React from 'react';
import MenuContent from '../components/MenuContent';
import ShoppingCart from "../components/ShoppingCart";
import Receipt from '../components/Receipt';

export async function getStaticPaths(){
    const res = await fetch('https://tommyy1708.github.io/foodapi.io/categorys.json');
    const menus = await res.json();
    const paths = menus?.map((category) => {
        return {
          params: {
            category: category.name.toString(),
          },
        };
      });
    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    const categoryName = context.params.category;
    const res1 = await fetch('https://tommyy1708.github.io/foodapi.io/menu.json');
    const data1 = await res1.json();
    const filteredData = data1.filter((item) => item.category === categoryName);
    return {
        props: { MENU_ITEMS: filteredData }
    }
}

const Name = ({ MENU_ITEMS }) => {
    return (
        <div className='main-content'>
                <MenuContent MENU_ITEMS={MENU_ITEMS} />
                <ShoppingCart />
        </div>
    );
}

export default Name;

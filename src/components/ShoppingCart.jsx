import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/slices/addcartslice';

export default function ShoppingCart() {
  const items = useSelector(state => state.shoppingCart.items);
  const total = useSelector(state => state.shoppingCart.total);
  const tax = useSelector(state => state.shoppingCart.tax);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    const { key, name, prices, category } = item;
    dispatch(removeItem({ key, name, prices, category }));
  }

  return (
    <siderbar className='layout_right'>
      <div className='text-center'>
        <h2 >Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          <ul className='list'>
            {items.map(item => (
              <li className={'siderbar_item underline'} key={item.key}>
                <h4>{item.name}</h4>
                <price>$ {item.prices}</price>x
                <amount>{item.amount}</amount>
                <button className='btn-margin' onClick={handleRemove}>remove</button>
              </li>
            ))}
          </ul>
        )}
        <p className='text-center large-text'>Tax: ${tax.toFixed(2)}<br />Total: ${total.toFixed(2)}</p>
      </div>
    </siderbar>

  );
}

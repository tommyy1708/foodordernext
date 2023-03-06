import { useSelector,useDispatch } from 'react-redux';
import { removeItem } from '../store/slices/addcartslice';

export default function ShoppingCart() {
  const items = useSelector(state => state.shoppingCart.items);
  const total = useSelector(state => state.shoppingCart.total);
  const dispatch = useDispatch();

  const handleRemove = (item) =>{
      const {key,name,prices,category} = item;
      dispatch(removeItem({ key,name,prices,category}));
  }

  return (
    <div className='text-center'>
      <h2 >Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul className='list'>
          {items.map(item => (
            <li className={'underline'} key={item.key}>
              {item.name} - ${item.prices}
              <button>+</button>
              {item.amount}
              <button >-</button>
              <button onClick={handleRemove}>remove</button>
            </li>
          ))}
        </ul>
      )}
      <p className='text-center large-text'>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

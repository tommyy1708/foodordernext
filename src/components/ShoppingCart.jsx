import { useSelector } from 'react-redux';

export default function ShoppingCart() {
  const items = useSelector(state => state.shoppingCart.items);
  const total = useSelector(state => state.shoppingCart.total);

  const handlebtn = () => {
    console.log(items);
  }
  return (
    <div>
      <h2 className='text-center'>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul className='list'>
          {items.map(item => (
            <li className={'underline'} key={item.key}>
              {item.name} - ${item.key}
              <button onClick={handlebtn}>btn</button>
            </li>
          ))}
        </ul>
      )}
      <p className='text-center large-text'>Total: ${total}</p>
    </div>
  );
}

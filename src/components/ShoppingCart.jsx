import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItem } from '../store/slices/addcartslice';


export default function ShoppingCart() {
  const items = useSelector(state => state.shoppingCart.items);
  const total = useSelector(state => state.shoppingCart.total);
  const tax = useSelector(state => state.shoppingCart.tax);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    const { key, name, prices, category } = item;
    dispatch(removeItem({ key, name, prices, category }));
  }

  //Approach Two without dialog
  const receiptRef = useRef(null);
  const printReceipt = () => {
    const receipt = receiptRef.current;
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframe.contentDocument.write(receipt.innerHTML);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    document.body.removeChild(iframe);
    const newItems = [];
    dispatch(updateItem(newItems));
  };

  return (
    <siderbar className='layout_right'>
      <div className='shopping-cart' ref={receiptRef}>
        {
          items.length === 0 ? (<p>Please adding on left</p>) : (
              <><table>{items.map(item => (
              <tr key={item.key}>
                <td>{item.name}</td>
                <td>{item.prices.toFixed(2)}</td>
                <td>X</td>
                <td>{item.amount}</td>
                <td onClick={handleRemove}><button>Remove</button></td>
              </tr>
            ))}
            </table>
            <p className='total'>Tax: ${tax.toFixed(2)}<br />Total: ${total.toFixed(2)}</p>
            <button className='checkout-btn' onClick={printReceipt}>Checkout</button></>
          )
        }
      </div>
    </siderbar >
  )
}

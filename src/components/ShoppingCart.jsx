import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/slices/addcartslice';
import dynamic from 'next/dynamic'; 
const Receipt = dynamic(() => import('./Receipt'), { ssr: false });

function ShoppingCart() {
  const items = useSelector(state => state.shoppingCart.items);
  const total = useSelector(state => state.shoppingCart.total);
  const tax = useSelector(state => state.shoppingCart.tax);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    const { key, name, prices, category } = item;
    dispatch(removeItem({ key, name, prices, category }));
  }

  /*  ----below is old print function----

  const receiptRef = useRef(null);
  const printRci = () => {
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

  ref={receiptRef} this comes after shopping-cart tag
   --------------------------- */


  const receiptContent = {
    items,
    total,
    tax,
  }

  return (
    <sidebar className='layout_right'>
      <div id='receiptContent' className='shopping-cart' >
        {
          items.length === 0 ? (<p>Please adding on left</p>) : (
            <><table id='shopping-receipt'>{items.map(item => (
              <tr key={item.key}>
                <td>{item.name}</td>
                <td>{item.prices.toFixed(2)}</td>
                <td>X</td>
                <td>{item.amount}</td>
                <td onClick={handleRemove}><button id="removeBtn">Remove</button></td>
              </tr>
            ))}
            </table>
              <p className='total'>Tax: ${tax.toFixed(2)}<br />Total: ${total.toFixed(2)}</p>
            </>
          )
        }
        <Receipt content={receiptContent}></Receipt>
      </div>
    </sidebar >
  )
}



export default ShoppingCart;
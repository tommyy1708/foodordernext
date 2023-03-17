import React from 'react';
import printJS from 'print-js';


export default function Receipt({ content }) {

  const {
    items,
    total,
    tax, } = content;

  function printReceipt() {
    printJS({
      printable: 'receiptContent',
      type: 'html',
      showModal: true,
      modalMessage: 'Printing, please wait...',
      // paperSize: { 
      //   unit: 'mm',
      //   width: 58, 
      //   height: 50 
      // },
      style:'@page {size: 4in 6in; margin:0; }', // this size for receipt
      font_size:'12pt',
      ignoreElements:['#shopping-receipt p'],
    });
  }

  return (
    <>
      <div id="receipt" style={{display:'none'}} >
        {
          items.length === 0 ? (<p>Please adding on left</p>) : (
            <><table id='print-receipt'>{items.map(item => (
              <tr key={item.key}>
                <td>{item.name}</td>
                <td>{item.prices.toFixed(2)}</td>
                <td>X</td>
                <td>{item.amount}</td>
              </tr>
            ))}
            </table>
              <p className='total'>Tax: ${tax.toFixed(2)}<br />Total: ${total.toFixed(2)}</p>
            </>
          )
        }
      </div>
      <button className='checkout-btn' onClick={printReceipt}>Checkout</button>
    </>
  );
}


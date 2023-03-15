import React, { useEffect } from 'react';
// import printJS from 'print-js';

const Receipt = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.printJS = printJS;
    }
  }, []);

  function handlePrint() {
    const content = document.getElementById('receipt').innerHTML;
    if (typeof window !== 'undefined' && window.printJS) {
      window.printJS({
        printable: content,
        type: 'html',
        documentTitle: 'Receipt',
        onPrintDialogClose: () => {
          window.print();
        },
        pageStyle: `
        @page {
          size: 58mm 50mm; 
          margin: 0; 
        }
        @media print {
          body {
            margin: 0; 
          }
        }
      `,
      });
    }
  }

  return (
    <div>
      <h1>Print Example</h1>
      <div id="receipt">
        {/* Content of receipt */}
        <p>paper</p>
        <p>prices $10</p>
      </div>
      <button onClick={handlePrint}>checkout</button>
    </div>
  )
}

export default Receipt;

import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/Pop.module.css'

Modal.setAppElement('#__next');

function Pop({ comboItem, isOpen, onClose, onConfirm }) {

  const [rice, setRice] = useState('');
  const [side, setSide] = useState('');

  const handleRiceChange = (event) => {
    setRice(event.target.value);
  };

  const handleSideChange = (event) => {
    setSide(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPrices = comboItem.prices;
    if (rice === 'chicken rice') {
      newPrices += 3;
    }
    const newItem = { ...comboItem, rice: rice || null, side: side || null, prices: newPrices };
    onConfirm(newItem);
    onClose();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal className={styles.pop_overlay} isOpen={isOpen} onRequestClose={onClose}>
      <form className={styles.pop_container} onSubmit={handleSubmit}>
        <div className={styles.pop_property}>
          <h2>Please select Rice and Side</h2>
          <p>Every Combo comes with white Rice or plain fried Rice(Pt Size)</p>
          <p>Pick one side from Soda / Soup / Egg Roll</p>
        </div>
        <label htmlFor="rice">Rice:</label>
        <select id="rice" value={rice} onChange={handleRiceChange}>
          <option value="">-- Please Select --</option>
          <option value="F rice">No Rice</option>
          <option value="white rice">White Rice</option>
          <option value="F rice">Plain Fried Rice</option>
          <option value="chicken rice">Chicken Rice + $3.00</option>
          <option value="pork rice">Pork Rice + $3.00</option>
          <option value="shrimp rice">Shrimp Rice + $3.00</option>
          <option value="beef rice">Beef Rice + $3.00</option>
          <option value="house rice">House Special Rice + $4.00</option>
          <option value="chicken lomein">Chicken LoMein + $6.00</option>
          <option value="pork lomein">Pork LoMein + $6.00</option>
          <option value="shrimp lomein">Shrimp LoMein + $6.00</option>
          <option value="beef lomein">Beef LoMein + $6.00</option>
          <option value="house lomein">House Special LoMein + $6.00</option>
        </select>
        <br />
        <label htmlFor="side">Side:</label>
        <select id="side" value={side} onChange={handleSideChange}>
          <option value="">-- Please Select --</option>
          <option value="no side">No side</option>
          <option value="egg roll">Egg Roll</option>
          <option value="egg drop soup">Egg Drop Soup</option>
          <option value="wonton soup">Wonton Soup</option>
          <option value="hot sour soup">Hot & Sour Soup </option>
          <option value="veg soup">Vegetable Soup + $3.00 </option>
          <option value="chicken noodle soup">Chicken Noodle Soup + $3.00 </option>
          <option value="soda">Soda</option>
        </select>
        <br />
        <button className={styles.cancel_btn} type="button" onClick={handleCancel}>Cancel</button>
        <button className={styles.confirm_btn} type="submit">Confirm</button>
      </form>
    </Modal>
  );
}

export default Pop;

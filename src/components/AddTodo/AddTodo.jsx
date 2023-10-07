import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';
import { FiPlus } from 'react-icons/fi';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'TO DO' });
    setText('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='🚢 랩오투원 오늘의 할일 🚢 '
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}><FiPlus/></button>
    </form>
  );
}

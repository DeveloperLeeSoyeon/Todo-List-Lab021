import React from 'react';
import { BiMinus } from 'react-icons/bi';
import styles from './Todo.module.css';


export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'DONE' : 'TO DO';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id='checkbox'
        checked={status === 'DONE'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox' className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BiMinus />
        </button>
      </span>
    </li>
  );
}

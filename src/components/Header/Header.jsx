import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <img className={styles.headerImg} src="../images/lab021_logo_black.png" alt="lab021" />
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

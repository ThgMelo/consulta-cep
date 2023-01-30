import styles from './Input.module.scss';
import { FaLocationArrow } from 'react-icons/fa';
import React from 'react';

export default function Input({label}) {
  return (
    <div className={styles.container}>
        <FaLocationArrow size="12" color="#8BC6EC"/>
        <input type="number"  id={label} className={styles.container__input} placeholder={label}/>
    </div>
  );
}

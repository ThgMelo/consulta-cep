import React from 'react'
import styles from './Output.module.scss';
import {MdContentCopy} from 'react-icons/md'

export default function Output({children}) {
  return (
    <div className={styles.outputs}>
      <label className={styles.outputs__label}>{children}</label>
      <div className={styles.outputs__output}>
        <input type="text"  className={styles.outputs__output_input}/>
        <MdContentCopy color={'#9599E2'} className={styles.outputs__output_button}/>
      </div>
    </div>
  )
}

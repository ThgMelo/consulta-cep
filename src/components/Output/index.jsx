import React from 'react'
import styles from './Output.module.scss';
import {MdContentCopy} from 'react-icons/md'

export default function Output({children, endereco, label}) {

  function copiarEndereco() {
    navigator.clipboard.writeText(endereco[label]);
    alert(`${children} copiado!`)
  }

  return (
    <div className={styles.outputs}>
      <p className={styles.outputs__label}>{children}</p>
      <div className={styles.outputs__output}>
        <p type="text"  className={styles.outputs__output_input}>
          {endereco[label]}
        </p>
        <MdContentCopy 
          color={'#9599E2'} 
          className={styles.outputs__output_button}
          onClick={copiarEndereco}
        />
      </div>
    </div>
  )
}

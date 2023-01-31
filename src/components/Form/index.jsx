import styles from './Form.module.scss';

import React from 'react';
import Input from '../Input/Input';
import Output from '../Output';

export default function Form() {
  return (
    <form className={styles.form}>
        <h2 className={styles.form__titulo}>Consulte seu <span>CEP</span></h2>
        <Input label="CEP"/>
        <div className={styles.form__outputs}>
          <Output>Logradouro</Output>
          <Output>Bairro</Output>
          <Output>Cidade</Output>
          <Output>Estado</Output>
        </div>
    </form>
  );
}

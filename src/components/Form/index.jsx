import styles from './Form.module.scss';

import React from 'react';
import Input from '../Input/Input';
import Output from '../Output';

export default function Form({endereco, setEndereco}) {


  return (
    <form className={styles.form}>
        <h2 className={styles.form__titulo}>Consulte seu <span>CEP</span></h2>
        <Input label="CEP" setEndereco={setEndereco}/>
        <div className={styles.form__outputs}>
          <Output endereco={endereco} label={'logradouro'}>Logradouro</Output>
          <Output endereco={endereco} label={'bairro'}>Bairro</Output>
          <Output endereco={endereco} label={'cidade'}>Cidade</Output>
          <Output endereco={endereco} label={'estado'}>Estado</Output>
        </div>
    </form>
  );
}

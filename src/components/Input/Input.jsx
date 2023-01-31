import styles from './Input.module.scss';
import { FaLocationArrow } from 'react-icons/fa';
import React from 'react';

export default function Input({label, setEndereco}) {

  function consultarCEP (evento) {
    const cep = evento.target.value;
    setEndereco({cep});

    if(cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
          setEndereco({
            logradouro: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          })
        })
    }
  }

  return (
    <div className={styles.container}>
        <FaLocationArrow size="16" color="#8BC6EC"/>
        <input 
          type="number"  
          id={label} 
          className={styles.container__input} 
          placeholder={label}
          onChange={consultarCEP}
        />
    </div>
  );
}

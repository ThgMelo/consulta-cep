import { useState } from 'react';
import Form from './components/Form';
import './styles/global.scss'

function App() {

  const [endereco, setEndereco] = useState('');

  return (
    <Form 
      endereco={endereco}
      setEndereco={setEndereco}
    />
  );
}

export default App;

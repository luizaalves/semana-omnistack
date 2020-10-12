import React,{useState} from 'react';
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  /*useState: dois valores que a função retorna;
  email= texto em branco, mas retorna o valor do estado em tempo real(atualizado) 
  setEmail= atualiza o valor desse estado do email*/
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/sessions', {email});

    const {_id } = response.data;
    
    //armazeno no banco local do meu navegador
    localStorage.setItem('user',_id);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            //sempre que executa onChange recebe um evento 
            onChange={event=> setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

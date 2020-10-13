import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
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

        //history faz a navegação de forma automatica
        history.push('/dashboard')
    }

    return (
        /*Tag vazia conhecida como fragment no react, 
        porque se colocar uma <div> por exemplo vai 
        atrapalhar a estilização da página*/
        <>
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
        </>
    )
}
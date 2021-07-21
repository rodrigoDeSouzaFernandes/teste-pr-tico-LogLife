import React, { useState, useContext } from 'react';

import Context from '../../context/Context';

import { Form, LoginTextField, LoginButton, Message, MessageContainer } from '../LoginForm/styles';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [renderMessage, setRenderMessage] = useState(false)

  const { users, setUsers } = useContext(Context)

  const emailVeryfy = () => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)
  const passwordVeryfy = () => password.length > 5;
  const nameVerify = () => name.length >= 3

  const registerUser = () => {
    const newUser = {name, email, password};

    if (users.find(usr => usr.email === newUser.email)){
      alert('Este email já está cadastrado');
      return null
    }

    setUsers([...users, newUser]);

    alert('Novo usuário registrado');

    localStorage.setItem('users', JSON.stringify([...users, newUser]));
  }

  return (
    <Form>
      <LoginTextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={({target}) => setName(target.value)}
      />
      <MessageContainer>
        {renderMessage && <Message>*O nome deve conter ao menos 4 caracteres</Message>}
      </MessageContainer>
      <LoginTextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
      <MessageContainer>
        {renderMessage && <Message>*O email deve estar no formato correto</Message>}
      </MessageContainer>
      <LoginTextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type='password'
        value={password}
        onChange={({target}) => setPassword(target.value)}
      />
      <MessageContainer>
        {renderMessage && <Message>*Sua senha deve conter ao menos 6 caracteres</Message>}
      </MessageContainer>

      <LoginButton 
      variant="contained"
      color="primary"
      disabled={!passwordVeryfy() || !emailVeryfy() || !nameVerify()}
      onClick={registerUser}
      >
        Cadastrar
      </LoginButton>
    </Form>
  )
}

export default RegisterForm;
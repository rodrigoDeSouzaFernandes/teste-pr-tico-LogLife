import React, { useState, useContext } from 'react';
import Context from '../../context/Context';

import { Form, LoginTextField, LoginButton, Message, MessageContainer } from './styles';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [renderMessage, setRenderMessage] = useState(false)

  const { users, acessToken, setAcessToken } = useContext(Context)

  const emailVeryfy = () => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)
  const passwordVeryfy = () => password.length > 5;

  const handleChangeEmail = ({target}) => {
    setEmail(target.value)
  };

  const handleChangePassword = ({target}) => {
    setPassword(target.value)
  };

  const getRandomToken = function() {
    const rand = () => Math.random().toString(36).substr(2);
    return rand() + rand();
  };

  const login = () => {
    const emailExists = users.find(usr => usr.email === email);

    if (!emailExists) {
      alert('Email ou Password incorretos')
      return null
    }
    if(password !== emailExists.password){
      alert('Email ou Password incorretos')
      return null
    }

    setAcessToken(getRandomToken());
    alert('login efetuado')
  }

  return (
    <Form>
      <LoginTextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleChangeEmail}
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
        onChange={handleChangePassword}
      />
      <MessageContainer>
        {renderMessage && <Message>*Sua senha deve conter ao menos 6 caracteres</Message>}
      </MessageContainer>

      <LoginButton
      variant="contained"
      color="primary"
      disabled={!passwordVeryfy() || !emailVeryfy()}
      onClick={login}
      >
        Entrar
      </LoginButton>
    </Form>
  )
}

export default LoginForm;
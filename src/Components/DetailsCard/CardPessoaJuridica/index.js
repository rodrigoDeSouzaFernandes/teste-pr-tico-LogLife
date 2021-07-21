import React, { useContext } from 'react';
import Context from '../../../context/Context';

import { useHistory } from 'react-router-dom'

import { Data, DetailsKey, Card, Title, BtnContainer, BtnClient } from '../styles'

function CardPessoaJuridica({client}) {

  const history = useHistory();

  const { clients, setClients } = useContext(Context);

  const deleteClient = () => {
    const removedClient = clients.filter(elem => elem !== client);
    setClients(removedClient);

    history.push('/clients-list')
  }

  return(
    <Card>
      <Title>Dados do cliente:</Title>
      <Data><DetailsKey>Tipo:</DetailsKey>{client.typeOfClient}</Data>
      <Data><DetailsKey>Situação:</DetailsKey>{client.statusOfClient}</Data>
      <Data><DetailsKey>Nome Fantasia:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Razão social:</DetailsKey>{client.lastName}</Data>
      <Data><DetailsKey>CNPJ:</DetailsKey>{client.cpfcnpj}</Data>
      <Data><DetailsKey>E-mail:</DetailsKey>{client.email}</Data>
      <Data><DetailsKey>Telefone:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>CEP:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Rua:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Numero:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Cidade:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Estado:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Horário de Abertura:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Dia de Atendimento:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Veículos utilizados:</DetailsKey>{client.name}</Data>
      <BtnContainer>
        <BtnClient onClick={() => {}}>Editar</BtnClient>
        <BtnClient onClick={deleteClient}>Deletar</BtnClient>
      </BtnContainer>
    </Card>
  )
}

export default CardPessoaJuridica;
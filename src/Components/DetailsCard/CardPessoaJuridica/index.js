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
      <Data><DetailsKey>Telefone:</DetailsKey>{client.phone}</Data>
      <Data><DetailsKey>CEP:</DetailsKey>{client.cep}</Data>
      <Data><DetailsKey>Rua:</DetailsKey>{client.street}</Data>
      <Data><DetailsKey>Numero:</DetailsKey>{client.number}</Data>
      <Data><DetailsKey>Cidade:</DetailsKey>{client.city}</Data>
      <Data><DetailsKey>Estado:</DetailsKey>{client.state}</Data>
      <Data><DetailsKey>Horário de Abertura:</DetailsKey>{client.opening}</Data>
      <Data><DetailsKey>Dia de Atendimento:</DetailsKey>{client.attendance}</Data>
      <Data><DetailsKey>Veículos utilizados:</DetailsKey>{client.vehicles.join(', ')}</Data>
      <BtnContainer>
        <BtnClient onClick={() => history.push(`/edit/${client.id}`)}>Editar</BtnClient>
        <BtnClient onClick={deleteClient}>Deletar</BtnClient>
      </BtnContainer>
    </Card>
  )
}

export default CardPessoaJuridica;
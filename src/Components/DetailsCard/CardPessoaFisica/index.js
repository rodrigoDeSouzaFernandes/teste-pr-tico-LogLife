import React from 'react';

import { Data, DetailsKey, Card, Title } from '../styles'

function CardPessoaFisica({client}) {
  return(
    <Card>
      <Title>Dados do cliente:</Title>
      <Data><DetailsKey>Tipo:</DetailsKey>{client.typeOfClient}</Data>
      <Data><DetailsKey>Situação:</DetailsKey>{client.statusOfClient}</Data>
      <Data><DetailsKey>Nome:</DetailsKey>{client.name}</Data>
      <Data><DetailsKey>Sobrenome:</DetailsKey>{client.lastName}</Data>
      <Data><DetailsKey>CPF:</DetailsKey>{client.cpfcnpj}</Data>
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
    </Card>
  )
}

export default CardPessoaFisica;
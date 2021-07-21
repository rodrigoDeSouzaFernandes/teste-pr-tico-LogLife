import React from 'react';
import CardPessoaFisica from './CardPessoaFisica';
import {Header} from '../'
import { DetailsBody } from './styles';
import CardPessoaJuridica from './CardPessoaJuridica';

function DetailsCard({client}) {
  return(
    <DetailsBody>
      <Header />
      {
        client.typeOfClient === 'Pessoa Jurídica'
        ? <CardPessoaJuridica client={client} />
        : <CardPessoaFisica client={client}/>
      }
    </DetailsBody>
  )
}

export default DetailsCard;
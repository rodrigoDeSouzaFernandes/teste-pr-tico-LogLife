import React from 'react';
import CardPessoaFisica from './CardPessoaFisica';

function DetailsCard({client}) {
  return(
    <div>
      <CardPessoaFisica client={client}/>
    </div>
  )
}

export default DetailsCard;
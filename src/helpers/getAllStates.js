const getAllStates = async() => (
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then((response) => response.json())
);

export default getAllStates;
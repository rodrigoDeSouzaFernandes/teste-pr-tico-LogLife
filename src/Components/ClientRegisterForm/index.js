  import React, {useState, useEffect} from 'react';

  import {ClientForm, ClientTextField, GroupRadio, ControlFormLabel} from './styles';

  import {Select, MenuItem, FormHelperText, Radio
  } from '@material-ui/core'
import getAllStates from '../../helpers/getAllStates';

  function ClientRegisterForm() {
    const [allStates, setAllStates] = useState([])
    const [ typeOfClient, setTypeOfClient ] = useState('');
    const [ statusOfClient, setStatusOfClient ] = useState('Ativo');
    const [ name, setName ] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpfcnpj, setCpfcnpj] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
      getAllStates()
      .then(response => {
        setAllStates(response)
      })
    }, [])
    const clientType = () => (
      <>
        <FormHelperText>Tipo de cliente:</FormHelperText>
        <Select
            value={typeOfClient}
            onChange={({target}) => setTypeOfClient(target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            required
          >
            <MenuItem value="" disabled>
              Tipo de cliente
            </MenuItem>
            <MenuItem value={'Pessoa Física'}>Pessoa Física</MenuItem>
            <MenuItem value={'Pessoa Jurídica'}>Pessoa Jurídica</MenuItem>
          </Select>
      </>
    )

    const emailVeryfy = () => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)

    const StyledRadio = (props) => {
      
      return (
        <Radio
          disableRipple
          color="default"
          {...props}
        />
      );
    }
    const clientStatus = () => (
        <>
        <FormHelperText>Situação do cliente:</FormHelperText>
        <GroupRadio
        onChange={({target}) => setStatusOfClient(target.value)}
        value={statusOfClient}
        aria-label="gender" 
        name="customized-radios">
          <ControlFormLabel value="Ativo" control={<StyledRadio />} label="Ativo" />
          <ControlFormLabel value="Inativo" control={<StyledRadio />} label="Inativo" />
        </GroupRadio>
        </>
      )

    const clientName = () => (
      <ClientTextField
        id="outlined-basic"
        label={ 
          typeOfClient === 'Pessoa Jurídica' ? 'Nome Fantasia' : 'Nome do cliente'
        }
        variant="outlined"
        value={name}
        onChange={({target}) => setName(target.value)}
        required
      />
    );

    const clientLastName = () => (
      <ClientTextField
        id="outlined-basic"
        label={ 
          typeOfClient === 'Pessoa Jurídica' ? 'Razão social' : 'Sobrenome do cliente'
        }
        variant="outlined"
        value={lastName}
        onChange={({target}) => setLastName(target.value)}
        required
      />
    );

    const cpfOrCnpj = () => (
      <ClientTextField
        id="outlined-basic"
        label={ 
          typeOfClient === 'Pessoa Jurídica' ? 'CNPJ do cliente' : 'CPF do cliente'
        }
        variant="outlined"
        value={cpfcnpj}
        onChange={({target}) => setCpfcnpj(target.value)}
        required
      />
    );

    const clientEmail = () => (
      <ClientTextField
        id="outlined-basic"
        label='E-mail do cliente'
        variant="outlined"
        value={email}
        onChange={({target}) => setEmail(target.value)}
        required
      />
    )

    const clientPhone = () => (
      <ClientTextField
        id="outlined-basic"
        label='Telefone do cliente'
        variant="outlined"
        value={phone}
        onChange={({target}) => setPhone(target.value)}
        required
      />
    )

    const clientCep = () => (
      <ClientTextField
        id="outlined-basic"
        label='CEP do cliente'
        variant="outlined"
        value={cep}
        onChange={({target}) => setCep(target.value)}
        required
      />
    )

    const clientStreet = () => (
      <ClientTextField
        id="outlined-basic"
        label='Rua'
        variant="outlined"
        value={street}
        onChange={({target}) => setStreet(target.value)}
        required
      />
    )

    const clientNumber = () => (
      <ClientTextField
        id="outlined-basic"
        label='Número'
        variant="outlined"
        value={number}
        onChange={({target}) => setNumber(target.value)}
        required
      />
    )

    const clientCity = () => (
      <ClientTextField
        id="outlined-basic"
        label='Cidade'
        variant="outlined"
        value={city}
        onChange={({target}) => setCity(target.value)}
        required
      />
    )

    const clientState = () => (
      <>
        <Select
            value={typeOfClient}
            onChange={({target}) => setTypeOfClient(target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            required
          >
            <MenuItem value="" disabled>
              Estado
            </MenuItem>
            {allStates.map((elem, i) => (
              <MenuItem key={i} value={elem.nome}>{elem.nome}</MenuItem>
            ))}
          </Select>
      </>
    )

    console.log(allStates)

    return (
      <ClientForm>
        {clientType()}
        {clientStatus()}
        {clientName()}
        {clientLastName()}
        {cpfOrCnpj()}
        {clientEmail()}
        {!emailVeryfy() && email.length > 0 && <p>Formato de e-mail incorreto</p>}
        {clientPhone()}
        {clientCep()}
        {clientStreet()}
        {clientNumber()}
        {clientCity()}
        {clientState()}
      </ClientForm>
    )
  }

  export default ClientRegisterForm;
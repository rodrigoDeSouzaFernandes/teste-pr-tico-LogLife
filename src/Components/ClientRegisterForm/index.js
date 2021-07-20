  import React, {useState} from 'react';

  import {ClientForm, ClientTextField, GroupRadio, ControlFormLabel} from './styles';

  import {Select, MenuItem, FormHelperText, Radio
  } from '@material-ui/core'

  function ClientRegisterForm() {
    const [ typeOfClient, setTypeOfClient ] = useState(null);
    const [ statusOfClient, setStatusOfClient ] = useState('Ativo');

    const clientType = () => (
      <>
        <FormHelperText>Tipo de cliente:</FormHelperText>
        <Select
            value={typeOfClient}
            onChange={({target}) => setTypeOfClient(target.value)}
            displayEmpty
            // className={classes.selectEmpty}
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

    const clientStatus = () => {
      const StyledRadio = (props) => {
      
        return (
          <Radio
            disableRipple
            color="default"
            {...props}
          />
        );
      }

      return (
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
    }

    return (
      <ClientForm>
        {clientType()}
        {clientStatus()}
        {/* <LoginTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChangeEmail}
        /> */}
  
      </ClientForm>
    )
  }

  export default ClientRegisterForm;
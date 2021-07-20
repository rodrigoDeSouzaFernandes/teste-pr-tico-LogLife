  import React, {useState} from 'react';

  import {ClientForm, ClientTextField} from './styles';

  import {Select, MenuItem, FormHelperText} from '@material-ui/core'

  function ClientRegisterForm() {
    const [ typeOfClient, setTypeOfClient ] = useState(null);

    const clientType = () => (
      <>
        <FormHelperText>Placeholder</FormHelperText>
        <Select
            value={typeOfClient}
            onChange={({target}) => setTypeOfClient(target.value)}
            displayEmpty
            // className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
            required
          >
            <MenuItem value="" disabled>
              Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
      </>
    )

    return (
      <ClientForm>
        {clientType()}
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
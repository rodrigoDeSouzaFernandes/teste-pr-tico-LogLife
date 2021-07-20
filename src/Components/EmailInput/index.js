import React from 'react';

import TextField, {Input} from '@material/react-text-field';

function EmailInput(){
  return (
    <TextField
          label='Dog'
          // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        ><Input
           value={this.state.value}
           onChange={(e) => this.setState({value: e.currentTarget.value})} />
    </TextField>
  )
}

export default EmailInput;

import Alert from '@material-ui/lab/Alert';
import {Button} from '@material-ui/core';

export const Error = ({ reload }) => (
  <Alert severity="error">
    Oops, something went wrong!
    <Button onClick={reload}>Reload</Button>
  </Alert>
);

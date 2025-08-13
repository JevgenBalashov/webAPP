import { SyntheticEvent } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const HIDE_DURATION = 6000;

export default function SnackBar({ isOpen, onClose, message }: Props) {
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={HIDE_DURATION}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity='success'
          variant='filled'>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

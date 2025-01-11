import { Button } from '@/components/atoms';
import { default as MuiDialog } from '@mui/material/Dialog';
import { default as MuiDialogActions } from '@mui/material/DialogActions';
import { default as MuiDialogContent } from '@mui/material/DialogContent';
import { default as MuiDialogContentText } from '@mui/material/DialogContentText';
import { default as MuiDialogTitle } from '@mui/material/DialogTitle';
import { TProps } from './ConfirmDialog.module.types';
import { s } from './ConfirmDialog.module.styles';
import { Box, Container } from '@/components/primitives';

export function ConfirmDialog({
  isOpen,
  title,
  submitLabel,
  submitColor,
  onSubmit,
  onClose,
  children,
}: TProps) {
  const handleClickRegister = async () => {
    await onSubmit();
  };

  return (
    <MuiDialog
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      open={isOpen}
      onClose={onClose}
    >
      <Container as={Box} className={s.Inner}>
        <MuiDialogTitle id="alert-dialog-title" className={s.Title}>
          {title}
        </MuiDialogTitle>

        <MuiDialogContent className={s.Content}>
          <MuiDialogContentText id="alert-dialog-description" component="div">
            {children}
          </MuiDialogContentText>
        </MuiDialogContent>

        <MuiDialogActions className={s.Actions}>
          <Button variant="contained" color="inherit" onClick={onClose}>
            キャンセル
          </Button>
          <Button
            variant="contained"
            color={submitColor || 'primary'}
            onClick={handleClickRegister}
            autoFocus
          >
            {submitLabel}
          </Button>
        </MuiDialogActions>
      </Container>
    </MuiDialog>
  );
}

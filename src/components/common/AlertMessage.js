import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DialogContentText } from '@material-ui/core';
import { Style } from './style';
import { Button } from '../../components'
import { colors } from '../../configs';

export default function AlertMessage(props) {

  const {
    title,
    message,
    titleStyle,
    contentTextStyle,
    onChangeCancel,
    onChangeSucess
  } = props

  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false)
    onChangeCancel()
  }

  const handleSuccess = () => {
    setOpen(false)
    onChangeSucess()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} disableEscapeKeyDown onBackdropClick={()=>{handleCancel()}}>
        <DialogTitle style={Object.assign({}, Style.alertMessageTitleStyle, titleStyle)}>{title}</DialogTitle>
        <DialogContent >
          <DialogContentText style={Object.assign({}, Style.alertMessageContentTextStyle, contentTextStyle)}>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button buttonName={"Cancel"} onClick={handleCancel} buttonStyle={{ backgroundColor: colors.darkgrey }}></Button>
          <Button buttonName={"Ok"} onClick={handleSuccess} buttonStyle={{ backgroundColor: colors.primary }}></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

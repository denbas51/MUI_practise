import { Alert, Snackbar } from "@mui/material"

function Snack({ isOpen, handleClose = Function.prototype }) {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert security="success">Товар добавлен в корзину!</Alert>
    </Snackbar>
  )
}

export default Snack

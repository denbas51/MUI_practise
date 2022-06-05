import { ListItem, IconButton, Typography } from "@mui/material"
import { Close } from "@mui/icons-material"

const BasketItem = ({ removeFromOrder, name, id, price, quantity }) => {
  return (
    <ListItem>
      <Typography variant="Body1">
        {name} {price}руб x{quantity}
      </Typography>
      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  )
}

export default BasketItem

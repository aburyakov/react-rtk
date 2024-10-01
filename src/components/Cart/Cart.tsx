import {
  ListItemIcon,
  ListItemText,
  SwipeableDrawerProps,
  Typography
} from "@mui/material";
import { AutoStories as BookIcon } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeFromCart, selectCart } from "../../store/slices/cartSlice";
import { Book } from "../../types/book";
import { CartDrawer, CartListItem, CartTitle, CloseIcon, DeleteIcon } from "../styledComponents";
import { EmptyContainer } from "../styledComponents";

export default function Cart({ children, onClose, ...restProps }: SwipeableDrawerProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  function onDeleteHandler(id: Book['id']) {
    return function() {
      dispatch(removeFromCart(id));
    }
  }

  return (
    <CartDrawer onClose={onClose} {...restProps}>
      <CartTitle variant="h5">Shopping Cart</CartTitle>
      <CloseIcon onClick={onClose} />
      {cart && cart.length ? (
        cart.map((book) => (
          <CartListItem
            key={book.id}
            secondaryAction={
              <DeleteIcon onClick={onDeleteHandler(book.id)} />
            }
          >
            <ListItemIcon>
              <BookIcon color="primary" />
            </ListItemIcon>
            <ListItemText id={book.id} primary={`${book.title} (${book.author_name})`} />
          </CartListItem>
        ))
      ) : (
        <EmptyContainer>
          <Typography variant="h6">Empty Cart</Typography>
        </EmptyContainer>
      )}
    </CartDrawer>
  )
}

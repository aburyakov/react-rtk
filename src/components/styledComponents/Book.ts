import {
  styled,
  Card,
  CardMedia,
  CardMediaProps,
  CardContent,
  CardProps
} from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';

interface BookContainerProps extends CardProps {
  inCart?: boolean;
}

export const BookContainer = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'inCart'
})<BookContainerProps>(({ inCart, theme }) =>({
  display: 'flex',
  margin: '15px 15px',
  width: '12%',
  minWidth: '140px',
  backgroundColor: inCart ? theme.palette.primary.main : 'white',
  position: 'relative',
  '& .MuiCardContent-root': {
    color: inCart ? 'white' : '#000',
  }
}));

export const BookIMG = styled(CardMedia)<CardMediaProps>({
  margin: '0 auto',
  height: '200px',
});

export const BookTextContainer = styled(CardContent)({
  padding: '10px',
});

const bookTextStyles = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: 'bold',
  fontSize: '11px'
};

export const BookTitle = styled('div')({
  ...bookTextStyles,
  marginBottom: '10px',
});

export const BookAutor = styled('div')({
  ...bookTextStyles,
  maxWidth: '100px',
});

export const AddedToTheCartIcon = styled(ShoppingCartCheckout)({
  color: 'white',
  position: 'absolute',
  bottom: '5px',
  right: '5px',
});

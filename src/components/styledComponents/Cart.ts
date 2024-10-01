import { ListItem, styled, SwipeableDrawer, Typography } from '@mui/material';
import { Delete, Close } from "@mui/icons-material";

export const CartDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    minWidth: '510px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      width: '100%',
    }
  }
}));

export const CartTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '20px',
}));

export const CartListItem = styled(ListItem)({
  '& .MuiListItemText-primary': {
    maxWidth: '390px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
});

export const DeleteIcon = styled(Delete)({
  cursor: 'pointer',
  marginLeft: '10px',
});

export const CloseIcon = styled(Close)({
  cursor: 'pointer',
  color: 'white',
  position: 'absolute',
  top: '20px',
  right: '20px',
});
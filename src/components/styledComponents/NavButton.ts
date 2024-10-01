import styled from "@emotion/styled";
import { Button, Box, IconButton } from "@mui/material";

export const NavButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const NavButton = styled(Button)({
  color: '#fff',
});

export const NavIconButton = styled(IconButton)({
  margin: 0,
});
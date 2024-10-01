import { AppBar, AppBarProps } from "@mui/material";
import styled from "@emotion/styled";

export const NavAppBar = styled(AppBar)<AppBarProps>({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingRight: '30px',
});
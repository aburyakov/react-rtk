import { PropsWithChildren, useMemo, useState } from "react";
import { Badge, CssBaseline, Toolbar } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { homePageUrl } from '../../router';
import { useAppSelector } from "../../store/hooks";
import { selectCart } from "../../store/slices/cartSlice";
import Cart from "../Cart/Cart";
import {
  NavButton,
  LayoutContainer,
  NavAppBar,
  NavButtonContainer,
  NavIconButton
} from '../styledComponents';


export default function PageLayout({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useAppSelector(selectCart);

  const cartCount = useMemo(() => cart.length, [cart.length]);

  function handleDrawerOpen() {
    setIsCartOpen(true);
  };

  function handleDrawerClose() {
    setIsCartOpen(false);
  };

  function goToHomePage() {
    navigate(homePageUrl);
  }

  return (
    <>
      <CssBaseline />
      <NavAppBar component="nav">
        <Toolbar>
          <NavButtonContainer>
            <NavButton onClick={goToHomePage}>
              Home
            </NavButton>
          </NavButtonContainer>
        </Toolbar>
        <NavButtonContainer>
          {!isCartOpen && (
              <NavIconButton
                color="inherit"
                aria-label="cart"
                edge="end"
                onClick={handleDrawerOpen}
              >
                
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </NavIconButton>
            )}
          </NavButtonContainer>
      </NavAppBar>
      <Cart
        open={isCartOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        anchor="right"
      />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}

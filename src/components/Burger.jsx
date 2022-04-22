// import { SideBarMenu, Hamburger, InputStyled } from "../styles/Sidebar.styled";
import { StyledBurger } from "../styles/Burger.styled";

export default function BurgerMenu({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
}

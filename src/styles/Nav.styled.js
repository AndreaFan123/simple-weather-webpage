import styled from "styled-components";
import { COLORS } from "./constants";

export const NavbarWrapper = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;

  & p {
    display: inline;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.fontPrimary};
  }
`;
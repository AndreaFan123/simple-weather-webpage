import styled from "styled-components";
import { COLORS } from "./constants";

export const SideBarNav = styled.aside`
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${COLORS.fontPrimary};
  background: ${COLORS.backgroundFilter};
  height: 100vh;
  padding: .5rem 3rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: all .5s ease-in-out;
  transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};

  div {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    
    &:not(:last-child) {
      border-bottom: 1px solid ${COLORS.fontPrimary};
    }

    @media (max-width: 576px) {
      width: 100%;
    }
  }

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
  }

  a {
    font-size: 1rem;
    font-weight: 300;
    color: ${COLORS.fontPrimary};
    text-decoration: none;
    letter-spacing: 0.1rem;
    transition: color 0.3s linear;

    &:hover {
      color: deeppink;
    }

    @media (max-width: 576px) {
      text-align: center;
    }
  }


`;
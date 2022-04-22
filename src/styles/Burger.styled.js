import styled from "styled-components";
import { COLORS } from "./constants";

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${COLORS.fontPrimary};
    border-radius: 10px;
    transition: all .3s linear;
    position: relative;
    transform-origin: 1px;
  }


`;
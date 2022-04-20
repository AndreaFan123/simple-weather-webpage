import styled from "styled-components";
// import img from "../weatherImage/params-11";

import { COLORS } from "./constants";

export const Wrapper = styled.main`
  background-image: url("https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -100;

  &::before {
    content: "";
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${COLORS.backgroundFilter};
    position: absolute;
  }
`;
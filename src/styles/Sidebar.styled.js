import styled from "styled-components";
import { COLORS } from "./constants";

export const SidebarWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0px;
  color: ${COLORS.fontPrimary};
  font-size: 1.3rem;
  font-weight: 200;
  height: 100vh;
  
  /* overflow-wrap: break-word; */
`;

export const SideMenu = styled.div`
  position: relative;
  transform: translateX(0%);
  transition: all 0.3s;
  width: 400px;
  height: 100%;
  background: rgba(0,0,0,0.5);

`;

export const Location = styled.div`
  padding: 30px 20px;

  p {
    font-weight: 600;
  }
`;

export const City = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    padding-right: 20px;
    text-decoration: none;
    color: ${COLORS.fontPrimary}
  }

  a:hover {
    background-color: #000;
    padding: 0 10px;
    transition: all ease 0.2s;
    color: deeppink
  }
`;
import styled from "styled-components";
import { COLORS } from "./constants";

export const FlexStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  color: ${COLORS.fontPrimary};

  p {
    padding-left: 20px;
  }
`;
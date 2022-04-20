import styled from "styled-components";
import { COLORS } from "./constants";

export const WeatherStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: 100px;
  position: relative;
  top: 30%;

  h2 {
    font-size: 5rem;
    font-weight: 700;
    color: ${COLORS.fontPrimary}
  }
`;
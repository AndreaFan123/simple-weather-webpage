import styled from "styled-components";
import { COLORS } from "./constants";

export const WeatherStyles = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 30px 20px;
  margin: 0 auto;
  position: relative;
  top: 40%;
  color: ${COLORS.fontPrimary};

  h2 {
    font-size: 5rem;
    font-weight: 700;
  }

  p {
    font-size: 3rem;
    font-weight: 300;
  }
  
`;
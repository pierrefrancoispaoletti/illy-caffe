import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginButtonStyled = styled(Link)`
  position: absolute;
  top: 15px;
  right: 15px;
  border: 4px solid white;
  padding: 10px 12px;
  border-radius: 50px;
  color: white;
  transition: all 0.1s ease-in-out;
  :active {
    background: white;
    color: red;
    border: 4px solid red;
  }
`;

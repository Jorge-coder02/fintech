import styled from "styled-components";
import { Link } from "react-router-dom"; // o el componente Link que estés usando

export const HeaderLink = styled(Link)`
  position: relative;
  font-weight: 700;
  text-decoration: none;
  color: inherit; /* Mantiene el color del texto padre */

  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #4bf6ed;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 300ms ease;
    bottom: -4px; /* Ajusta según necesites */
    left: 0;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

// Componente Styled Button
interface StyledButtonProps {
  $variant: "primary" | "secondary" | "tertiary";
}

const variantColors = {
  primary: "#05a69f",
  secondary: "#056573",
  tertiary: "#1c3c55",
};
const variantHoverColors = {
  primary: "#056573",
  secondary: "#1c3c55",
  tertiary: "#056573",
};

const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) => variantColors[props.$variant || "primary"]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: bold;
  padding: 1rem 3.6rem;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => variantHoverColors[props.$variant]};
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// * Componente Botón *
type Props = {
  enlace: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};
const Button2 = ({ enlace = "/", children, variant = "primary" }: Props) => {
  return (
    <StyledButton onClick={(e) => e.preventDefault()} $variant={variant}>
      <Link to={enlace || "/"}>{children}</Link>
    </StyledButton>
  );
};

export default Button2;

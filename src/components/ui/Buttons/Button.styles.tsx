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
  color: #ffffff;
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

  a {
    color: inherit;
    text-decoration: none;
  }
`;

// * Componente Botón *
type Props = {
  onClick?: () => void;
  enlace?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

const Button2 = ({
  onClick,
  enlace = "/",
  children,
  variant = "primary",
}: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
    // Si no hay onClick, no hacemos preventDefault para permitir el comportamiento normal del Link
  };

  return (
    <StyledButton onClick={handleClick} $variant={variant}>
      {onClick ? children : <Link to={enlace}>{children}</Link>}
    </StyledButton>
  );
};

export default Button2;

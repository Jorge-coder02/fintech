import styled from "styled-components";
const StyledButton = styled.button<{ $variant?: "primary" | "secondary" }>`
  background: ${(props) =>
    props.$variant === "secondary" ? "#056573" : "#05a69f"};
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
    background: #1c3c55;
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(0);
  }
`;

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};
const Button2 = ({ children, variant = "primary" }: Props) => {
  return (
    <StyledButton onClick={(e) => e.preventDefault()} $variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button2;

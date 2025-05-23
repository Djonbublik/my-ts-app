import React from "react";
import styled from "styled-components";

interface SortButtonProps {
  bgColor: string;
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.bgColor === "white" ? "black" : "white")};
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.bgColor === "white" ? "#e0e0e0" : props.bgColor};
  }
`;

const SortButton: React.FC<SortButtonProps> = ({
  bgColor,
  onClick,
  children,
}) => {
  return (
    <StyledButton bgColor={bgColor} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default SortButton;

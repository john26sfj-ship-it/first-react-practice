import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.primary ? "blue" : "red")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
  background: ${props => (props.primary ? "green" : "yellow")};
  color: ${props => (props.primary ? "white" : "black")}
  }
`;

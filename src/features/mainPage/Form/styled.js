import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 15px 0px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.darkBlueButton};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px 0px;
`;


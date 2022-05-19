import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 0px;
  border: 1px solid ${({theme})=> theme.colors.darkBlueButton};

  &:not(:last-child){
    margin: 0px 0px 15px 0px;
  }
`;
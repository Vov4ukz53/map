import styled from "styled-components";
import background from "./background.jpg"

export const Wrapper = styled.section`
  background: url(${background}) center no-repeat;
  height: 100vh;
  background-position: cover;
`;

export const Title = styled.h1`
  margin: 0px 0px 30px 0px;
`;

export const Form = styled.form`
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
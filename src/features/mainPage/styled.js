import styled from "styled-components";
import { NavLink } from "react-router-dom";
import background from "./background.jpg";

export const Wrapper = styled.section`
  background: url(${background}) center no-repeat;
  min-height: 100vh;
  padding: 20px 0px;
`;

export const Title = styled.h1`
  margin: 0px 0px 30px 0px;
  text-align: center;
`;

export const Link = styled(NavLink)`
  background: ${({ theme }) => theme.colors.crayola};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px 0px;
  border-radius: 5px;
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background .3s;

  &:hover{
    background: ${({ theme }) => theme.colors.celtikBlue};
  }
`;

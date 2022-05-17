import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: ${({theme})=> theme.colors.darkBlueButton};
  height: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  list-style: none;
  margin: 0px 20px;
`;


export const Link = styled(NavLink)`
  color: ${({theme})=> theme.colors.white};
  text-decoration: none;
`;


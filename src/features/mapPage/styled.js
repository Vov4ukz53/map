import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const MyMap = styled(MapContainer)`
  margin: 30px 0px 0px 0px;
  height: 600px;
  width: 100%;

  @media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    height: 400px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.crayola};
  color: ${({ theme }) => theme.colors.white};
  margin: 0px 0px 50px 0px;
  padding: 10px 15px;
  transition: background .3s;
  cursor: pointer;

  &:hover{
    background: ${({ theme }) => theme.colors.celtikBlue};
  }
`;


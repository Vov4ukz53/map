import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px 0px 50px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 20px 0px 30px 0px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin: 0px;
  font-weight: 600; 
  line-height: 32px;
`;

export const Input = styled.input`
  margin: 0px 0px 0px 15px;
  width: 50px;
`;
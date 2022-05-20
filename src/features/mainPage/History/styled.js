import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 30px;
  background: ${({ theme }) => theme.colors.whiteOpacity};
  padding: 20px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin: 0px 0px 20px 0px;
`;

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  padding-bottom: 10px;
  margin: 0px 0px 15px 0px;
  display: inline-flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.crayola};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    display: block;
  }
`;

export const Paragraph = styled.p`
  margin: 0px 15px 0px 0px;
  font-weight: 600;
`;

export const Button = styled.button`
  margin: 20px 0px 0px 0px;
  border-radius: 5px;
  padding: 10px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  transition: background .3s;

  &:disabled{
    background: ${({ theme }) => theme.colors.grey};
    cursor: default;

    &:hover{
      background: ${({ theme }) => theme.colors.grey};
    }
  }

  &:hover{
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`;
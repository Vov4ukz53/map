import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  background-position: cover;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;
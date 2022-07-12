import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.background.black};
    padding: 64px 24px 0;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    margin: 64px 0 32px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

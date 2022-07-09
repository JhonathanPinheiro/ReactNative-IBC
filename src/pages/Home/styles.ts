import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.background.black};
    padding: 16px 8px;
  `}
`;

export const Tile = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.orange1};
  `}
`;

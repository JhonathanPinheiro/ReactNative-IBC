import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.background.black};
    padding: 64px 24px 0;
  `}
`;

export const ScrollBox = styled.ScrollView`
  margin-top: 64px;
`;

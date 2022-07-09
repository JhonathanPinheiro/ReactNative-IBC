import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 50px;
    font-weight: 500;
    color: ${theme.colors.white};
    text-transform: capitalize;
  `}
`;

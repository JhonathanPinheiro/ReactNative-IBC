import styled, { css } from "styled-components/native";

export const Box = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 160px;
    min-height: 184px;
    justify-content: flex-end;
    padding: 8px;
    margin-bottom: 32px;
    border-radius: 16px;
    background-color: ${theme.background.grey};
    text-align: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    text-transform: capitalize;
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    text-transform: capitalize;
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

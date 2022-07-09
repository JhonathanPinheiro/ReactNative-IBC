import styled, { css } from "styled-components/native";

export const Box = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 160px;
    height: 184px;
    justify-content: space-between;
    padding: 0 0 8px 0;
    margin-bottom: 32px;
    border-radius: 16px;
    background-color: ${theme.background.grey};
    text-align: center;
  `}
`;

export const Image = styled.Image`
  width: 100%;
  height: 60%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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

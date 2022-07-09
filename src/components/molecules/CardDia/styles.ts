import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    min-height: 150px;
    margin-bottom: 32px;
    border-radius: 8px;
    background-color: ${theme.background.grey};
  `}
`;

export const Image = styled.Image`
  width: 50%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Box = styled.View`
  width: 50%;
  padding: 16px;
  justify-content: space-between;
`;

export const SubBox = styled.View`
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    text-transform: capitalize;
    color: ${theme.colors.white};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    text-transform: capitalize;
    color: ${theme.colors.white};
  `}
`;

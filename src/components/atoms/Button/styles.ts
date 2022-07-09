import styled, { css } from "styled-components/native";

type ButtonProps = {
  color: string;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, color }) => css`
    width: 100%;
    padding: 6px;
    font-size: 24px;
    text-align: center;
    text-transform: capitalize;
    background-color: ${color};
    border-radius: 8px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    text-align: center;
  `}
`;

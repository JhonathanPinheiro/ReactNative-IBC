import React from "react";
import { Text } from "react-native";

import * as S from "./styles";

type ButtonProps = {
  text: string;
  color: string;
};

export default function Button({ text, color }: ButtonProps) {
  return (
    <S.Container color={color}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

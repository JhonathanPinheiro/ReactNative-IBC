import React from "react";

import * as S from "./styles";

type CardHomeProps = {
  title: string;
  subtitle: string;
};

export default function CardSemana({ title, subtitle }: CardHomeProps) {
  return (
    <S.Box>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Box>
  );
}

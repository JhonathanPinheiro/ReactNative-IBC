import React from "react";

import * as S from "./styles";

type TitleProps = {
  title: string;
};

export default function TitleSection({ title }: TitleProps) {
  return <S.Title>{title}</S.Title>;
}

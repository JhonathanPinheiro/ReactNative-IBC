import React from "react";
import { ScrollView } from "react-native";
import TitleSection from "../../components/atoms/TitleSection";
import CardDia from "../../components/molecules/CardDia";
import * as S from "./styles";

export default function SemanaPage() {
  return (
    <S.Container>
      <TitleSection title="semana 1" />
      <S.ScrollBox>
        <CardDia title="a biblia" subtitle="1º Dia" />
        <CardDia title="a biblia" subtitle="2º Dia" />
        <CardDia title="a biblia" subtitle="3º Dia" />
        <CardDia title="a biblia" subtitle="4º Dia" />
        <CardDia title="a biblia" subtitle="5º Dia" />
        <CardDia title="a biblia" subtitle="6º Dia" />
      </S.ScrollBox>
    </S.Container>
  );
}

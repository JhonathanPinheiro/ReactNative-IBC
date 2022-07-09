import React from "react";
import { ScrollView } from "react-native";
import TitleSection from "../../components/atoms/TitleSection";
import CardHome from "../../components/molecules/CardSemana";
import * as S from "./styles";

export default function HomePage() {
  return (
    <S.Container>
      <TitleSection title="discipulado" />
      <ScrollView>
        <S.Content>
          <CardHome title="semana 1" subtitle="a bíblia" />
          <CardHome title="semana 1" subtitle="a bíblia" />
          <CardHome title="semana 1" subtitle="a bíblia" />
          <CardHome title="semana 1" subtitle="a bíblia" />
          <CardHome title="semana 1" subtitle="a bíblia" />
          <CardHome title="semana 1" subtitle="a bíblia" />
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}

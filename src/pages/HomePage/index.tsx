import React from "react";
import { FlatList, ScrollView } from "react-native";
import TitleSection from "../../components/atoms/TitleSection";
import CardHome from "../../components/molecules/CardSemana";
import * as S from "./styles";

import data from "../../utils/data.json";

export default function HomePage() {
  return (
    <S.Container>
      <TitleSection title="discipulado" />
      <ScrollView>
        <S.Content>
          {data.map((item, index) => (
            <CardHome key={index} data={item} />
          ))}
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}

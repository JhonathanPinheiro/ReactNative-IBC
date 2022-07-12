export type CardHomeProps = {
  data: {
    semana: number;
    title: string;
    dias: {
      dia: number;
      devocional: string;
      versículo: string;
      title: string;
      conteudo: string;
      avalie: {
        primeiro: string;
        segundo: string;
      };
      aprodunde: string;
    }[];
  };
};

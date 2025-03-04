export type Carona = {
  id: number;
  motorista: string;
  origem: string;
  destino: string;
  data: string;
  valor: string;
}

export const caronas: Carona[] = [
  {
    id: 1,
    motorista: 'Reginaldo Coelho Pinto da Silva',
    origem: 'Rua José Lourenço Kelmer, 1300 - São Pedro, Juiz de Fora - MG',
    destino: 'Av. Itamar Franco, 3600 - São Mateus, Juiz de Fora - MG',
    data: '4 de Nov • 15:09',
    valor: 'R$ 88,23',
  },
  {
    id: 2,
    motorista: 'Reginaldo Coelho Pinto da Silva',
    origem: 'Rua São Mateus, 135 - São Pedro, Juiz de Fora - MG',
    destino: 'Av. Rio Branco, 120 - São Mateus, Juiz de Fora - MG',
    data: '2 de Mai • 12:34',
    valor: 'R$ 88,23',
  },
  {
    id: 3,
    motorista: 'Reginaldo Coelho Pinto da Silva',
    origem: 'Rua Visconde de Mauá, 135 - São Pedro, Juiz de Fora - MG',
    destino: 'Av. Antônio Carlos, 3420 - São Mateus, Juiz de Fora - MG',
    data: '1 de Mai • 10:24',
    valor: 'R$ 88,23',
  },
]
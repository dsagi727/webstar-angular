export interface CharacterModel {
  id: string;
  name: string;
  side: 'LIGHT' | 'DARK';
  force: {
    power: string;
    midichlorian: number;
  };
  createdTimestamp: number;
  description: string;
}

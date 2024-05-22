import { Character } from '@react-n-morty-monorepo/data';

export type CharactersStackNavigator = {
  CharacterList: undefined;
  CharacterDetails: { character: Character };
};

import { Character } from '../getAllCharacters/types';

export type FetchSingleCharacterParams = {
  id?: string;
};

export type FetchSingleCharacterResponse = {
  data: Character;
};

import { PaginationType } from '../commons';

export type FetchCharactersParams = {
  page?: number;
};

interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type FetchCharactersPayload = {
  info: PaginationType;
  results: Character[];
};

export type FetchCharactersResponse = {
  data: FetchCharactersPayload;
};

import { useQuery } from '@tanstack/react-query';

import { fetchSingleCharacter } from './api';
import { FetchSingleCharacterParams } from './types';
import { Character } from '../getAllCharacters/types';

export const GET_CHARACTER_KEY = 'GET_CHARACTER_KEY';

export const useCharacter = ({ id }: FetchSingleCharacterParams) => {
  return useQuery<Character>({
    queryKey: [GET_CHARACTER_KEY, id],
    queryFn: () => fetchSingleCharacter({ id }),
    enabled: !!id,
  });
};

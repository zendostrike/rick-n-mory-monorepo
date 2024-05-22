import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchCharacters } from './api';
import { FetchCharactersParams, FetchCharactersPayload } from './types';

export const GET_CHARACTERS_KEY = 'GET_CHARACTERS_KEY';

export const useCharacters = ({ page }: FetchCharactersParams) => {
  return useQuery<FetchCharactersPayload>({
    queryKey: [GET_CHARACTERS_KEY, page],
    queryFn: () => fetchCharacters({ page }),
    placeholderData: keepPreviousData,
  });
};

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchCharacters } from './api';
import { FetchCharactersParams, FetchCharactersPayload } from './types';

export const GET_CHARACTERS_KEY = 'GET_CHARACTERS_KEY';

export const useCharacters = ({
  page,
  name,
  species,
}: FetchCharactersParams) => {
  return useQuery<FetchCharactersPayload>({
    queryKey: [GET_CHARACTERS_KEY, page, name, species],
    queryFn: () => fetchCharacters({ page, name, species }),
    placeholderData: keepPreviousData,
  });
};

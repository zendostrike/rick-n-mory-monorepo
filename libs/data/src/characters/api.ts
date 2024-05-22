import { FetchCharactersParams, FetchCharactersResponse } from './types';

import { axios } from '../axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (params: FetchCharactersParams) => {
  console.log('PARAMS', params.page);

  const { data } = await axios.get<
    FetchCharactersParams,
    FetchCharactersResponse
  >(`${API_URL}/character`, {
    params,
  });

  return data;
};

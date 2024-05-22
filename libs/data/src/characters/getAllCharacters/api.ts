import { FetchCharactersParams, FetchCharactersResponse } from './types';

import { axios } from '../../axios';
import { API_URL } from '../../commons/constants';

export const fetchCharacters = async (params: FetchCharactersParams) => {
  const { data } = await axios.get<
    FetchCharactersParams,
    FetchCharactersResponse
  >(`${API_URL}/character`, {
    params,
  });

  return data;
};

import {
  FetchSingleCharacterParams,
  FetchSingleCharacterResponse,
} from './types';

import { axios } from '../../axios';
import { API_URL } from '../../commons/constants';

export const fetchSingleCharacter = async (
  params: FetchSingleCharacterParams
) => {
  const { data } = await axios.get<
    FetchSingleCharacterParams,
    FetchSingleCharacterResponse
  >(`${API_URL}/character/${params.id}`, {
    params,
  });

  return data;
};

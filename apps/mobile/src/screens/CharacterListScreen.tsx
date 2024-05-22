import * as React from 'react';
import { FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Character, useCharacters } from '@react-n-morty-monorepo/data';

import { ErrorMessage, ListItem, LoadingIndicator } from '../components';
import { CharactersStackNavigator } from '../navigation/types';

type CharacterListScreenNavigationProp = StackNavigationProp<
  CharactersStackNavigator,
  'CharacterList'
>;

type Props = {
  navigation?: CharacterListScreenNavigationProp;
};

export function CharacterListScreen({ navigation }: Props) {
  const { isPending, error, data } = useCharacters({});

  /* const onListItemPress = React.useCallback(
    (character: Character) => {
      navigation.navigate('CharacterDetails', {
        character,
      });
    },
    [navigation]
  ); */

  const renderItem = React.useCallback(({ item }) => {
    return <ListItem item={item} onPress={() => {}} />;
  }, []);

  if (isPending) return <LoadingIndicator />;

  if (error) return <ErrorMessage message={error.message}></ErrorMessage>;

  return (
    <FlatList
      data={data?.results}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    ></FlatList>
  );
}

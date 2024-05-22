import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { useCharacter } from '@react-n-morty-monorepo/data';

import { ErrorMessage, LoadingIndicator } from '../components';
import { CharactersStackNavigator } from '../navigation/types';

type CharacterDetailsScreenNavigationProp = StackNavigationProp<
  CharactersStackNavigator,
  'CharacterDetails'
>;

type Props = {
  navigation: CharacterDetailsScreenNavigationProp;
  route: RouteProp<CharactersStackNavigator, 'CharacterDetails'>;
};

export function CharacterDetailsScreen({ route }: Props) {
  const { isPending, error, data } = useCharacter({
    id: route?.params?.character?.id?.toString(0),
  });

  if (isPending) return <LoadingIndicator />;

  if (error) return <ErrorMessage message={error.message}></ErrorMessage>;

  if (!data) return null;

  return (
    <ScrollView>
      <View style={styles.titleRow}>
        <Text>
          {data.name} - ({data.species})
        </Text>
      </View>

      <View>
        <View style={styles.infoRow}>
          <Text>Gender: {data.gender}</Text>
        </View>
        <View style={styles.actorsRow}>
          <Text>Origin: {data.origin.name}</Text>
          <Text>Location: {data.location.name}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    margin: 20,
  },
  infoRow: {
    flexDirection: 'row',
    margin: 20,
  },
  actorsRow: {
    flexDirection: 'column',
    margin: 20,
    marginTop: 10,
  },
});

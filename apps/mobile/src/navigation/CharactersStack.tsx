import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CharacterListScreen } from '../screens/CharacterListScreen';
import { CharacterDetailsScreen } from '../screens/CharacterDetailScreen';
import { CharactersStackNavigator } from './types';

const Stack = createStackNavigator<CharactersStackNavigator>();

export function CharactersStack() {
  return (
    <Stack.Navigator initialRouteName="CharacterList">
      <Stack.Screen
        name="CharacterList"
        component={CharacterListScreen}
        options={{
          headerTitle: 'Characters',
        }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
        options={{
          headerTitle: 'Character details',
        }}
      />
    </Stack.Navigator>
  );
}

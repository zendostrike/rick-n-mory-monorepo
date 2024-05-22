import React from 'react';

import { AppProvider } from '../providers/AppProvider';
import { CharactersStack } from '../navigation/CharactersStack';
import { CharacterListScreen } from '../screens/CharacterListScreen';

export const App = () => {
  return (
    <AppProvider>
      <CharacterListScreen />

      {/*  <CharactersStack /> */}
    </AppProvider>
  );
};

export default App;

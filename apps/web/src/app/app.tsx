import { Route, Routes } from 'react-router-dom';

import { Home } from '../screens/home';
import { Detail } from '../screens/detail';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/detail/:characterId" element={<Detail />} />
    </Routes>
  );
}

export default App;

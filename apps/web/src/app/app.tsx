import { Route, Routes } from 'react-router-dom';

import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { Searching } from './pages';
import { PATH } from './constants';

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Searching />} />
    </Routes>
  );
}

export default App;

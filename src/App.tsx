import { Routes, Route } from 'react-router-dom';

// Components
import Home from 'components/routes/home/home';
import Navigation from 'components/navigation/navigation';

// Styles
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

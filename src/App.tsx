import { Routes, Route } from 'react-router-dom';

// Components
import Home from 'components/routes/home/home';
import Navigation from 'components/routes/navigation/navigation';

// Styles
import './App.scss';
import Shop from 'components/routes/shop/shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

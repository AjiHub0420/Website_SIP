import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './pages/layoutPage';
import Home from './pages/homePage';
import Map from './pages/mapPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path='map' element={<Map />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

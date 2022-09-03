import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './layouts';
import { Home, Tentang, Faq, Produk, Events, Partnership } from './pages';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tentang" element={<Tentang />} />
          <Route path="/Produk" element={<Produk />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Partnership" element={<Partnership />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

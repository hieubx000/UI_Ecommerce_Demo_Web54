import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/boxicons/css/boxicons.min.css'
import './sass/index.scss'
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<ProductList/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/product/:slug" element={<ProductDetail/>} />
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  );
}

export default App;

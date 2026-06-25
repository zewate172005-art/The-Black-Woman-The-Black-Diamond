import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Sales from './pages/Sales';
import About from './pages/About';
import Author from './pages/Author';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import OrderFailed from './pages/OrderFailed';
import Admin from './pages/Admin';
import Training from './pages/Training';
import Pillars from './pages/Pillars';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book" element={<Sales />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Author />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success/:orderNumber" element={<OrderSuccess />} />
        <Route path="/order-failed" element={<OrderFailed />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/training" element={<Training />} />
        <Route path="/pillars" element={<Pillars />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

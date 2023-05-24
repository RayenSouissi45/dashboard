import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Test from '../pages/test';
import Products from '../pages/products';
import Statistics from '../pages/statistics';
import Profile from '../pages/profile';
import Clients from '../pages/clients';
import Orders from '../pages/orders';

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default Router;

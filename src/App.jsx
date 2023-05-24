import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './router/layout';
import Dashboard from './pages/dashboard';
import Test from './pages/test';
import Products from './pages/products'
import Clients from './pages/clients';
import Orders from './pages/orders';
import Statistics from './pages/statistics';
import Profile from './pages/profile';
// import SignIn from './pages/signIn';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/profile" element={<Profile/> } />
          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/orders" element={<Orders/>} />
          {/* <Route path="/SignIn" element={<SignIn />} /> */}
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

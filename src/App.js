import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Access/Login';
import Register from './components/Access/Register';
import AddProduct from './components/AddProduct/AddProduct';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyProducts from './components/MyProducts/MyProducts';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/manageInventory' element={
        <RequireAuth>
            <ManageInventory />
        </RequireAuth>
       } />
        <Route path='/myproduct' element={
          <RequireAuth>
              <MyProducts />
          </RequireAuth>
       } />
        <Route path="*" element= {<NotFound />} />
      </Routes>
      <Footer />
      
  </div>
  );
}

export default App;

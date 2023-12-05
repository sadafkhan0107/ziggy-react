import './App.css';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About/About';
import { RestaurantMenu } from './pages/ResturantMenu/RestaurantMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/about' element={< About/>} />
        <Route path='/restaurant/:resId' element={<RestaurantMenu />} />
      </Routes>
    </div>
  );
}

export default App;

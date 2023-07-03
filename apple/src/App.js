import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Store from './pages/Store';
import Ipad from './pages/Ipad';
import Iphone from './pages/Iphone';
import Footer from './components/Footer';
import WrongPage from './components/WrongPage';
import { useEffect } from 'react';
import Support from './pages/Support';
import CreateRequest from './Support/CreateRequest';
function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/store" element={<Store />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/createrequest" element={<CreateRequest />} />
        {/*
        <Route path="/buyipadpro" element={<IpadPro />} />
        <Route path="/buyipadmini" element={<IpadMini />} />
        <Route path="/buyipadair4" element={<IpadAir4 />} />
        <Route path="/buyipadair" element={<IpadAir />} />
        <Route path="/buyipadpro6" element={<IpadPro6 />} />
        <Route path="/buyipad10gen" element={<Ipad10Gen />} />
        <Route path="/buyipad9gen" element={<Ipad9Gen />} />
  */}
        <Route path="*" element={<WrongPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

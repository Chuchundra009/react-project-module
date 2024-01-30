import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Card, Home, Error, Ready, Table} from '../../Pages'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/table" element={<Table/>}/>
          <Route path="/ready" element={<Ready/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './Header';
import {Route,Routes } from "react-router-dom"
import Home from './Home';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
        <Header/>    
        <Routes>
        <Route path="/" extaxt element={<Home/>}/>
        <Route path="cart" extaxt element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;

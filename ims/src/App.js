import './App.css';
import './UI/Body.js';
import {BrowserRouter, Route, Routes , Link} from "react-router-dom";
import Home from './UI/Home';
import Purchase from './Components/Purchase';
import Vendors from './Components/Sidebar_Components/Vendors';
import History from './Components/Sidebar_Components/History';
import DarkMode from './Components/Sidebar_Components/DarkMode'; 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header className='common_header'>
          <Link className='header' to="/"><h1 className='stripe-text'><DarkMode /></h1></Link>
          
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/purchase" element={<Purchase/>} /> 
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/history" element={<History />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

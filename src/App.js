import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Specials from './components/Specials'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav/>
      <Main/>
      <Specials/>
      <Footer/>
    </Router>
  );
}

export default App;

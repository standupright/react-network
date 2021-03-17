import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App__wrapper">
          <Navbar />
          <Main />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

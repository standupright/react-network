import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <div className="App">     
      <Header />
      <div className="App__wrapper">
        <Navbar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SearchCountry from './Components/SearchCountry/SearchCountry';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <h2>Let's see the all Countries</h2>
        <div className="search-box">
          <input className="search-input" type="text" name="" id="search-input" placeholder="Search country" />
          <button onClick={SearchCountry} className="search-btn">Search</button>
        </div>
        <Countries></Countries>
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;

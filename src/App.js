import "./App.css";
import Country from "./components.js/Country";
import Navbar from "./components.js/Navbar";
import Header from "./components.js/header";

// const baseUrl='https://restcountries.com/v3.1/all'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Country />
    </div>
  );
}

export default App;

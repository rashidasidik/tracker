
import  './App.css';
import Header from './components/Header';
import Stats from "./components/Stats"

function App() {
  return (
    <div className="App">
    <Header/>
    <h1>GLOBEL SUMMARY</h1>
    <Stats url="https://covid19.mathdro.id/api"/>   
  </div>

  );

}


export default App;

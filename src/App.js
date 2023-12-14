// import './App.css';
import FeeList from './components/feelist'
import feedata from './components/fees.json'

function App() {
  const tariffs = feedata;
  return (
    <div className="App">
      <h1>Выберите тариф:</h1>
      <FeeList data={tariffs}/>
    </div>
  );
}

export default App;

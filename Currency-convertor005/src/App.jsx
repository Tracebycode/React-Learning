import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  return (
    <>
    <h1>My name is Abhishek </h1>
    <h2>Welcome to Currency Convertor App</h2>
    <div>
      <h3>Currency Information:</h3>
      <pre>{JSON.stringify(useCurrencyInfo("usd"), null, 2)}</pre>
    </div> default useCurrencyInfo;

     
    </>
  )
}

export default App

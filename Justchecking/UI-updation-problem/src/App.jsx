import './App.css'

function App() {
  let count =0;
  
      function updateCounter() {
     document.getElementById('counter').textContent = `Counter: ${count}`;
    }

  function increment(){
    count = count +1;
    console.log(count);
    updateCounter
  }

  function decrrement(){
    count = count -1;
    console.log(count);
    updateCounter()
  }
  
  function reset(){
    count = 0;
    console.log(count);
    updateCounter()

  }



  return (
    <>
    <h1>Counter checking</h1>
    <h2 id='counter'></h2>
    <button onClick={increment()}>Increment</button>
    <button onClick={decrrement()}>Decrement</button>
    <button onClick={reset()}>Reset</button>
      
    </>
  )
}

export default App

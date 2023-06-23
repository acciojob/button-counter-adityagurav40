
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
    let [count , setCount] = useState(0);

   
  function countClicks(){
    seCount{count+1}
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <p> Button clicked {count] times</p>
    <button onClick ={countClicks}>Click me</button>
    </div>
)
}
export default App
export default App

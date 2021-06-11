import './App.css';
import { useState, useEffect} from "react";

const App = () => {

  const [data, setData] = useState ({}); 

  useEffect(() => {
    handleFetch();
    }, []);

  const handleFetch = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json();
    // console.log(data)
    setData(data);

  }

  return (
    <div>
    <h1>Chuck Norris Quote Machine</h1>
    <button onClick={handleFetch}>hanldeFetch</button>
    <h2>Joke:</h2>
    <p>{data.value}</p>
    </div>
  );
}

export default App;

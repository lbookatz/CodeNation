import './App.css';
import { useState, useEffect} from "react";

const App = () => {

  const [data, setData] = useState ({}); 
  

  useEffect(() => {
    handleFetch();
    }, []);

  const handleFetch = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const data = await response.json();
    console.log(data)
    setData(data);

  }

  return (
    <div>
    <h1>cat images</h1>
    <button onClick={handleFetch}>hanldeFetch</button>
    <h2>Image:</h2>
    <p>{data[0].url}</p>
    <img src={data[0].url} alt="cat" width="200px" height="200px"></img>
    </div>
  );
}

export default App;

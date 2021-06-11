// import logo from './logo.svg';
// import './App.css';
// import img from'./images/img.jpg'
import React, {useState} from 'react' 
// import Number from './challanges/Counter'
// import Music from './challanges/music'
import ToDoList from './challanges/todolist'

const App = () => {
  return <ToDoList />
  }




// const Person = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p >{props.age}</p>
//       <button onClick={props.clickMe}>Click Me</button>
//     </div>
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([
//     {name: "leon", age: 30}, 
//     {name: "jordan", age: 34}
//   ]);

//   const handleClick = (value) => {
//     console.log(value)
//   }

//   return (
//       <div>
//         <Person name={persons[0].name} age={persons[0].age} clickMe={() => handleClick("test")}/>
//         <Person name={persons[1].name} age={persons[1].age} clickMe={() => handleClick("test1")}/>
//       </div>
//   );
//   }

// }const Person = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p onClick={props.clickMe}>{props.age}</p>
//       <button >Click Me</button>
//     </div>
//   )
// }
// const App = () => {
//   const [persons, setPersons] = useState([
//     {name: "leon", age: 30}, 
//     {name: "jordan", age: 34}
//   ]);

//   const handleClick = () => {
//     console.log("i've been clicked")
//   }

//   return (
//       <div>
//         <Person name={persons[0].name} age={persons[0].age} clickMe={handleClick}/>
//         <Person name={persons[1].name} age={persons[1].age} clickMe={handleClick}/>
//       </div>
//   );
// }

// const App = () =>{
//   const [count, setCount] = useState(22)

//   return(
//     <div>
//       <h2>{count}</h2>
//     </div>
//   )
// }

// const App = () =>{
//   return(
//     <div class="App">
//       <h1>hello World</h1>
//       <Job name="lance" job="chef"/>
//       <Job name="jeremy" job="web"/>
      
      
//     </div> 
//   )  
// }

// const Job =(props) => {
//   return(
//     <div>
//       <p>my name is {props.name} my job is {props.job}</p>
//       <Imgage />
//     </div>
//   )
// }

// const Music = (props) => {
//   return(
//     <div>
//       <h1>{props.artist}</h1>
//       <img src={props.src}/>
//     </div>
//   )
// }

// const Imgage = () => {
//   return(
//     <div>
//       <Music artist="picture1" src={img} />
//     </div>
//   )
// }


// const App = () =>{
//   return(
//     <div class="App">
//       <h1>hello World</h1>
//       <Person name="lance" favCol="green"/>
//       <Person name="jeremy" favCol="aqua"/>
//       <Person></Person>
      
//     </div> 
//   )  
// }

// const Person = (props) =>{
//   return <h2>Hello {props.title} you y</h2>
// }


// const Meal = () =>{
//   return <p>test</p>    
//   )
// }

// const App = () =>{
//   return(
//     <div class="App">
//       <h1>hello World</h1>
//       <p>is this working</p>
//       <Person />
//       <Person />
//       <Person>thios is moretesting</Person>
      
//     </div> 
//   )  
// }

// const Person = () => {
//   return(
//     <div>
//       <h3>does this work</h3>
//       <h4>yes it does</h4>
//       <Meal />
//     </div>
//   )
// }

// const New = () =>{
//   return(
//     <div class="App">
//       <h1>hello World</h1>
//       <p>is this working</p>
//       <Person />
//       <Person />
      
//     </div> 
//   )  
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

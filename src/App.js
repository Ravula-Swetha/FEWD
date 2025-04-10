// import logo from './logo.svg';
import './App.css';
import Props from './Components/Props';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import DestructindProps from './Components/DestructingProps';
import ObjectDestructure from './Components/ObjectDestructure';
import DestructingArrays from './Components/DestructingArrays';

// function add(a, b){
//   return a+b
// }

function App() {
  return (
    <div className="App">
       {/* <h1>Internal Sum function: {add(2, 3)}</h1>
       <h1>External Sum funtion: {Addition(10,7)}</h1>   */}
        <Props name="Jane" college="KMIT"></Props>
       <Counter/>
       <ClassCounter /> 
       <DestructindProps name="Doe" place="Hyderabad"></DestructindProps>
       <ObjectDestructure></ObjectDestructure>
       <DestructingArrays></DestructingArrays>
    </div>
  );
}

export default App;

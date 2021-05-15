import react, {useState, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increament, decreament} from './actions'


function App() {
  const counter = useSelector(state => {return state.counter});
  const isLogged = useSelector(state => {return state.isLogged});
  const dispatch = useDispatch();
  const [rate,changeRate] = useState(1);
  const updateCounter=(e)=>{
    changeRate(Number(e.target.value));
  }
  return (
    <div className="App">
      <h1>Mini Counter Project</h1>
      <h1>Counter: {counter} </h1>
      <h2>Change counter:</h2>
      <form>
      <input
      type="text"
      name="rate" 
      value={rate}
      onInput={updateCounter}
      ></input>  
      </form>
      <div className="buttondiv">
        <button onClick={()=> dispatch(increament(rate))}>+</button>
        <button onClick={()=> dispatch(decreament(rate))}>-</button>
      </div>
      
      {isLogged ? <h3>Valuable information not see if not logged:</h3> : ""}
    </div>
  );
}

export default App;

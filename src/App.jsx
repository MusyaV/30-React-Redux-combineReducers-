import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();

  const cash = useSelector(state => state.cash.cash)

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }

  return (
    <div className={'app'}>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div style={{ fontSize: '2rem', marginRight: '10px' }}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
      </div>
    </div>
  );
}

export default App;

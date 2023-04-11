import logo from './logo.svg';
import './App.css';
import Dish from './Dish.jsx'

function App() {
  return (
    <div className='App'>
      <input type="text" />
      <Dish dish={{ title: 'cake' }} />
      <Dish dish={{ title: 'pudding' }} />
    </div>
  );
}

export default App;

import './App.css';
import Copyright from "./Copyright.jsx"
import Welcome from "./Welcome.jsx";
import Spotlight from "./Spotlight.jsx";
import LikeButton from './LikeButton';
import Slider from './Slider'
import Counter from './Counter'

function App() {
  return (
  <div className="App">
    <Copyright year="2000" companyName="epoch"/>   
    <Copyright year="3000" companyName="mistyrose, Inc"/>  
    <Spotlight name="Port Melbourne"/>
    <LikeButton />
    <LikeButton />
    <Slider />
    <Welcome />
    <Counter />
  </div>
  )
}

export default App;

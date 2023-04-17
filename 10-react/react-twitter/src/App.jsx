import './App.css';
import TweetInput from './TweetInput';
import Tweets from './Tweets';
import { useState } from 'react'

function App() {
  const [tweets, setTweets] = useState(['one', 'two'])
  const [poopCount, setPoopCount] = useState(0)
  
  return (
    <div className="App">
      <TweetInput onSubmit={setTweets} setPoopCount={setPoopCount}/>
      <Tweets tweets={tweets} poopCount={poopCount}/>
    </div>
  );
}

export default App;

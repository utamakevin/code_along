import './App.css';
import TweetInput from './TweetInput';
import Tweets from './Tweets';
import { useState } from 'react'

function App() {
  const [tweets, setTweets] = useState(['one', 'two'])
  
  return (
    <div className="App">
      <TweetInput onSubmit={setTweets}/>
      <Tweets tweets={tweets}/>
    </div>
  );
}

export default App;

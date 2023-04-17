import { useState } from 'react'
import './TweetInput.css'
import Bar from './Bar'

export default function TweetInput({ onSubmit, setPoopCount }) {
  const [tweet, setTweet] = useState('')

  const handleChange = e => {
  setTweet(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // setTweets([tweet, ...tweets])
    onSubmit(prevTweets => [tweet, ...prevTweets])
    // e.target.reset() // can be done, but this is DOM. use react instead.
    setTweet('')
    let randomNumber = Math.floor(Math.random() * 500)
    setPoopCount(randomNumber)
  }

  const charsLeft = 140 - tweet.length
  const charsLeftClasses = charsLeft < 20 ? "chars-left warning" : "chars-left"
  const isDisabled = tweet.length === 0 || tweet.length > 140
  const barPercent = (charsLeft/ 140) * 100

  return (
    <div className="tweet-input">
      <Bar percent={barPercent} />
      <form onSubmit={handleSubmit}>
        <textarea 
          value = {tweet}
          placeholder="What is happening?" 
          onChange={handleChange}>   
        </textarea>
        <footer>
          <span className={charsLeftClasses}>{charsLeft}</span>
          <button disabled={isDisabled} className="tweet-btn">
            tweet
          </button>
        </footer>
      </form>
    </div>
      
  )
}
import Tweet from './Tweet'

export default function Tweets({ tweets, poopCount }) {

    return (
        <section className="latest-tweets">
          <Tweet tweets={tweets} poopCount={poopCount}/>
        </section>
    )
}
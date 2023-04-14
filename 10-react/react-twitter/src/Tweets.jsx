import Tweet from './Tweet'

export default function Tweets({ tweets }) {

    return (
        <section className="latest-tweets">
          <Tweet tweets={tweets}/>
        </section>
    )
}
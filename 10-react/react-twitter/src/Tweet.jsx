
export default function Tweet({ tweets }) {
    return (
        tweets.map((tweet, idx) => <article key={idx}>{tweet}</article>)
    )
}
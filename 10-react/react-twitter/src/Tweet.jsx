import { useState } from "react"

export default function Tweet({ tweets, poopCount }) {
    

    return (
        tweets.map((tweet, idx) => (
            <article key={idx}>
                <section>
                    <p>{tweet}</p>
                </section>
                <footer>
                    <span>💩 {poopCount}</span>
                </footer>

            </article>
        ))
    )
}
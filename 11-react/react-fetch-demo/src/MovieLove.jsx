import { useEffect, useState } from "react"

function fetchMoviesWithLove(year) {
    return fetch(`https://www.omdbapi.com/?apikey=2f6435d9&s=love&y=${year}`)
        .then(res => res.json())
}

export default function MovieLove() {
    const [total, setTotal] = useState(null)
    const [year, setYear] = useState("2023")

    useEffect(() => {
        fetchMoviesWithLove(year)
            .then(data => setTotal(data.totalResults))
    }, [year])

    const handleChange = e => {
        setYear(e.target.value)
    }

    return (
        <section>
            <select onChange={handleChange} value={year}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            
            <h2>{total} movies with the word love in the title</h2>

        </section>
    )
}
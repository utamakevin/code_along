import { useEffect, useState } from "react"


export default function Stats() {
    // let [owners, setOwners] = useState([])
    // let [total, setTotal] = useState(null)

    let [data, setData] = useState(null)

    useEffect(() => {
        fetch('stats.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <section>
            <h1>stats</h1>

            {data ? <p>{data.total_owners}</p> : <h2>loading...</h2>}
            {data && <p>{data.total_owners}</p>}
            {<p>{data?.total_owners}</p>}
        </section>
    )
}
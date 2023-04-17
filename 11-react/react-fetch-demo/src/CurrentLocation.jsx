import { useEffect, useState } from "react"

export default function CurrentLocation() {
    const [coords, setCoords] = useState(null)
    const [address, setAddress] = useState('')

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(res => {
            // console.log(res.coords)

            const { latitude: lat, longitude: lng } = res.coords
            setCoords({ lat, lng })
        })

        
    }, [])

    useEffect(() => {
        if(coords === null) {
            return
        }

        const key = process.env.REACT_APP_GOOGLE_KEY

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${key}`)
        .then(res => res.json())
        .then(data => {
            let address = data.results[0].formatted_address
            setAddress(address)
        })

    }, [coords?.lat, coords?.lng])
    
    return ( 
        <section>
            <h1>Your current location</h1>

            <p>lat: {coords?.lat}</p>
            <p>lng: {coords?.lng}</p>
            {address && <p>{address}</p>}

        </section>
    )
}
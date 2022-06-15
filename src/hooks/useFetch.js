import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [responseObject, setResponseObject] = useState()


    useEffect(() => { sendRequest() }, [])

    const sendRequest = async () => {

        fetch(url).then((response) => {

            if (response.ok)
                return response.json();
            else
                console.error(`Response is not OK: ${response}`)

        }).then(setResponseObject).catch((error) => {
            console.error(`Error has occurred: ${error}`)
        })
    }

    return [responseObject, sendRequest]
}

export default useFetch
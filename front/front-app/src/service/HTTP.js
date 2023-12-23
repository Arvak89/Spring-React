import {useCallback, useState} from "react";

export const useHttp = () => {

    const [process, setProcess] = useState("waiting")

    const request = useCallback(async (url, payload) => {

        setProcess("loading")

        const response = await fetch(`http://localhost:8080${url}`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        setProcess("waiting")

        return response
    }, [])

    const requestWithToken = useCallback(async (url) => {

        setProcess("loading")

        const response =  await fetch(`http://localhost:8080${url}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            }
        });

        setProcess("waiting")

        return response
    }, [])

    return {request, requestWithToken, process, setProcess}
}


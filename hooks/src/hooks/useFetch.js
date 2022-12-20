import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
	const [response, setResponde] = useState({
		data: null,
		loading: false
	})

	useEffect(function(){
		fetch(url, { method })
			.then(resp => resp.json())
			.then(json => setResponde({
				data: json,
				loading: false
			}))
	}, [url, method])

	return response
}
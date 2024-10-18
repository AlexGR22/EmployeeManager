import { useEffect, useState } from "react"

const localCache = {}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null

    })

    const setLoadingState = () => {

        setState({
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null
        })
    }  

    useEffect(() => {

        const getFetch = async () => {

            if ( localCache[url] ) {
                setState({
                    data: localCache[url],
                    isLoading: false,
                    hasError: false,
                    errorMessage: null
                })

                return
            }

            setLoadingState()
            
            fetch(url)
                .then(resp => resp.json())
                .then(data => {

                    localCache[url] = data
                    setState({
                        data,
                        isLoading: false,
                        hasError: false,
                        errorMessage: null
                    })
                    
                })
                .catch(err => {

                    console.log(err);
                    setState({
                        data: null,
                        isLoading: false,
                        hasError: true,
                        errorMessage: {
                            message: err.message,
                            messageText: 'No se pudo cargar la información',
                            code: err.code
                        }
                    })
                })

        }
        getFetch()
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }
}

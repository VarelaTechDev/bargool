import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

// Children is a prop every single React component has
export const StateContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // Async since we are going to make API calls
    // /videos, /search, /images
    const getResults = async (url) => {
        setLoading(true)

        const response = await fetch(`${baseUrl}${url}`, {
            method:'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            },
        })
        const data = await response.json()
        // console.log(data) 
        if(url.includes('/news')){
            setResults(data.entries)
        }else if(url.includes('/images')){
            setResults(data.image_results)
        }else{
            setResults(data.results)
        }

        // setResults(data)
        setLoading(false)
    }

    // ? ResultContext [DOT] Provider
    return(
        <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

import { useEffect, useState } from 'react'
import Card from './Card'
import Spinner from './Spinner'
import Footer from './Footer'

const apiCall = () => {


    const [loading, setLoading] = useState(true)
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const apiCall = async () =>{
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await res.json()
            setLoading(false)
            setCharacters(data.results)
        }
        apiCall()       
    }, [page])

    return (

        <div className='flex items-center justify-center flex-wrap mt-8 '>             

        {
            loading == true ? (
                <div className='w-screen h-screen flex items-center justify-center'>
                    <Spinner></Spinner>
                </div>)
            :(
            characters.map(character => {
                return (
                    <Card key={character.id} character={character}/>
                
            )}))
        }
    <Footer page={page} setPage={setPage}/>
    </div>
  )

}

export default apiCall
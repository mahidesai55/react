import React, { useState } from 'react'
import axios from 'axios'
import './Movies.css'

function Movies() {
    let [change, setChange] = useState('')
    let [come, setcome] = useState([])





    let api = "cdd194f28c738477d69f8b2cd2e65077"


    function movies(photo) {
        return (`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${photo}`)
    }




    function handleChange(e) {
        setChange(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=cdd194f28c738477d69f8b2cd2e65077&language=en-US&query=' + change + '&page=1&include_adult=false')
            .then((response) => {
                setcome(response.data.results)
                console.log(response.data.results)
            })
    }


    return (
        <div className='wrapper'>
            <h1>Sarch All Movies</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={change} placeholder='Enter your 
                text' onChange={handleChange} ></input>
                <button type='submit'>Sarch Movie</button>
            </form>

            <div className='imagepage'>{

                come.map((check) => {
                    return (
                        <div className='imagemovie'>
                            <img src={movies(check.backdrop_path)}></img>
                            <h2 className='tital'> {check.title}</h2>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Movies
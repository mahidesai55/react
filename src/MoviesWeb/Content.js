import React from 'react'

function Content() {
    const [moviename, setmovie] = useState([])
  axios.get("https://api.themoviedb.org/3/search/movie?api_key=7bedce967e1f639d95710ef2d51d6134&language=en-US&query=RRR&page=1&include_adult=false")
  return (
    <div>Content</div>
  )
}

export default Content
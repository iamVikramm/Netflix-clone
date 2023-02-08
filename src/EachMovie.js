import { useLocation } from "react-router-dom";

function EachMovie(){
    const location = useLocation();
    const movieData = location.state;
    console.log(movieData)

    return(
        <div className="each-movie-container">
           
            <div className="header-content" style={{margin:"0",width:"145vmin",marginLeft:"5%",backgroundSize:"cover" ,height:"60vmin",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`}}>
            <h1 style={{color:"white"}}> {movieData.name} </h1> 
            </div>
            <div style={{marginLeft:"5%"}}>
                <h2 style={{color:"white"}}>Original Name : {movieData.original_name}</h2>
                <h4 style={{color:"white"}}>Rating : {movieData.vote_average}</h4>
                <h4 style={{color:"white"}}>Popularity : {movieData.popularity} </h4>
                <p style={{color:"white"}}>{movieData.overview}</p>

            </div>
        </div>    
    )
}

export default EachMovie;
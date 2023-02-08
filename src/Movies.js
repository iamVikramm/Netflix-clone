import "./App.css"
import { Link } from "react-router-dom";

function Movies(item){
  const Item = item.item;
    return (
        <div className="App" style={{textDecoration:"none"}}>
          <Link to={`movies/${Item.id}`} state={Item}><div className="img-div"><img className="img" alt={Item.id} src={`https://image.tmdb.org/t/p/original/${Item.poster_path}`} style={{textDecoration:"none"}}></img></div></Link>
          <div className="title"><p style={{textDecoration:"none",color:"white"}}>{Item.name}</p></div>
        </div>
      );
}
export default Movies;

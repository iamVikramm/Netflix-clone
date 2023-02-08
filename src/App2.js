import Movies from "./Movies"

function App2(Data){
    console.log(Data)
    const data = Data.data;
    let backItem = data[Math.floor(Math.random()*data.length-1)];
    return(
      <div>
        <div className="Header">
            <div style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${backItem.backdrop_path}")`,backgroundSize:"cover", height: "65vmin",backgroundPosition: "center",width:"140vmin"}} className="header-content">
              <h1 style={{marginLeft:"3%"}}>{backItem.name}</h1>
              <h4 style={{marginLeft:"3%"}}> 2019 | Maturity Rating : A | 2 Seasons | TV Dramas</h4>
              <p style={{width:"80vmin",marginLeft:"3%"}}>{backItem.overview}</p>
              <h5 style={{marginLeft:"3%"}}>Rating : {backItem.vote_average}</h5>
            </div>
        </div>
      
        <h1 style={{display:"block",color:"white",marginLeft:"3vmin"}}>Latest Releases</h1>
        <div className="container">
        {
          data.map(item=>{
            return(
              <Movies item={item} />
            )
          })
        }
      </div>
    </div>
    )
}

export default App2;
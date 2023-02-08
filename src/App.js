import axios from "./axios";
import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App2 from "./App2";
import Loader from "./Loader";
import EachMovie from "./EachMovie";

function App(){
    const [data,setdata] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
      async function fetchData(){
        const resp = await axios.get("/discover/tv?api_key=ea6530bd4c33e39c2b63a1ff8dff9064");
        await setdata(resp.data.results);
        setLoading(false)
      }
      fetchData();
    },[])
    console.log(data)
    if(loading){
        return(
            <Loader />
        )
    }
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<App2 data={data}/>}></Route>
            <Route path="/movies/:id" element={<EachMovie />} ></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
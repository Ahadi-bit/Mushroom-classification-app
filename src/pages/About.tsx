import { FC,useState,useEffect} from 'react';
import { getFeatures } from '../services/mushroomFeatures';
import { IMushroomFeatures } from '../interfaces/formModel';
import axios from "axios"

const defaultPosts:IMushroomFeatures[] = [];


const About: FC = () => {
  const[features, setFeatures]:[IMushroomFeatures[], (features:IMushroomFeatures[])=>void] = useState([])
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() =>{
    axios
    .get<IMushroomFeatures[]>('http://127.0.0.1:8000/categories', {
      headers:{"Content-Type": "application/json",'Access-Control-Allow-Origin': '*'},
      
    }).then(response =>{
      console.log(response)
      setFeatures(response.data)
      setLoading(false)
    }).catch(ex =>{
      const error = ex === 404 ? "Resource Not found" : "An unexpected error has occurred";
      setError(error)
      setLoading(false)
    });
  },[])
  return(
    <div className="App">
    <ul className="Feat">
      {features.map((i) => (
       <li key={i.feature}>
        { `${i.feature} :${i.options}`}
       </li>
     ))}
    </ul>
    {error && <p className="error">{error}</p>}
  </div>
  )
};

export default About;

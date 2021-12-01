import { FC,useEffect,useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Paper, Typography, Container } from '@mui/material/';
import { Dropdown } from './Dropdown';
import Grid from '@mui/material/Grid';
// import { mushroomFeature } from '../../mushroomFeatures';
import { IFormInput,IMushroomFeatures } from '../../interfaces';
import axios from "axios"
import './Form.css';



interface ITestProps {
  onChange: any;
  name: any;
  label: any;
}




export const Form: FC = () => {
  const[features, setFeatures]:[IMushroomFeatures[], (features:IMushroomFeatures[])=>void] = useState([])
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const { handleSubmit, reset, control,register,watch} = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data); 


  useEffect(() =>{
    axios
    .get<IMushroomFeatures[]>('http://127.0.0.1:8000/categories', {
      headers:{"Content-Type": "application/json",'Access-Control-Allow-Origin': '*'},
      
    }).then(response =>{
      console.log(response.data)
      setFeatures(response.data)
      setLoading(false)
    }).catch(ex =>{
      const error = ex === 404 ? "Resource Not found" : "An unexpected error has occurred";
      setError(error)
      setLoading(false)
    });
  },[])

  return (
    <Paper sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          display: 'flex',
          marginTop: '15px',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: '15px',
        }}
      >
        Welcome to the Mushroom app!
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        Is your mushroom edible or not? Fill out the form below to find out!
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="form-container"
      >
      {features.map((i,index) => (
        <Grid key={index} item xs={6}>
        <Dropdown name={i.feature}/>
        </Grid>
      ))}
      </Grid>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          paddingBottom: '10px',
        }}
      >
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
        <Button onClick={() => reset()} variant="outlined" color="secondary">
          Reset
        </Button>
      </Container>
    </Paper>
  );
};

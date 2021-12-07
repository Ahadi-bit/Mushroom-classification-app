import {FC,useEffect,useState} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getPopulation} from '../../services/api/api'
import Container from '@mui/material/Container';


ChartJS.register(ArcElement, Tooltip, Legend);


// Function component for the Population Pie Chart
export const PopulationChart:FC = () => {
  const [pop, setPop] = useState({})
  useEffect(() =>{
    getPopulation('https://protected-headland-74973.herokuapp.com/population')
      .then(pop=>{
        setPop(pop)
      }).catch(err => ()=> console.log(err))
  },[])



  const data = {
    labels: Object.keys(pop),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(pop),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container maxWidth="sm" >
      <Pie data={data} />;
    </Container>
  )
}

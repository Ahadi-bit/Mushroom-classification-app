import {FC,useState,useEffect} from 'react';
import { getFeatures } from '../../services/api/api';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import {mushroomFeature} from '../../mushroomFeatures'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// Options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Feature importance chart',
    },
  },
};

// Functional component for the feature Chart
export const FeatureChart: FC = () => {
  const [feature, setfeature] = useState({})
  const [dpItem, setdpItem] = useState('')

  useEffect(() =>{
    getFeatures('https://protected-headland-74973.herokuapp.com/balance/odor')
      .then(feature=>{
        setfeature(feature)
      }).catch(err => ()=> console.log(err))
  },[])

  const labels = Object.keys(feature)

  const data ={
    labels,
    datasets:[
      {
        label:'Edible',
        data: labels.map((x)=> feature[x]['e']),
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      {
        label:'Poisonous',
        data: labels.map((x)=> feature[x]['p']),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  const onChange = (event: SelectChangeEvent) =>{
    getFeatures(`https://protected-headland-74973.herokuapp.com/balance/${event.target.value as string}`)
    .then(feature=>{
      setfeature(feature)
    }).catch(err => ()=> console.log(err))
    setdpItem(event.target.value as string)
  }
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120, display:'flex' }}>
        <InputLabel>Features</InputLabel>
        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" onChange={onChange} value={dpItem} label="feature">
          {mushroomFeature.map((key,index) => (
            <MenuItem key={index} value={key.feature}>
              {key.feature}
            </MenuItem>
          ))}
        </Select>
      </FormControl >     
      <Bar options={options} data={data} />
    </>
  );
}


import { FC , useEffect,useState} from 'react';
import { getCorrelation } from '../../services/api/api';
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


export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Correlation Chart based on target',
    },
  },
};


export const Correlation:FC = () => {
  const[correlation, setCorrelation] = useState({})
  useEffect(() =>{
      getCorrelation('https://protected-headland-74973.herokuapp.com/correlation')
        .then(correlation=>{
          setCorrelation(correlation)
        }).catch(err => ()=> console.log(err))
  },[])
  delete correlation['target']
  delete correlation['cap_shape']
  delete correlation['stalk_shape']
  delete correlation['veil_type']
  delete correlation['veil_color']
  delete correlation['ring_type']
  delete correlation['spore_print_color']

  
  const labels = Object.keys(correlation);

  const data = {
    labels,
    datasets: [
      {
        label: 'Correlation',
        data: Object.values(correlation),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return <Bar options={options} data={data} />
}


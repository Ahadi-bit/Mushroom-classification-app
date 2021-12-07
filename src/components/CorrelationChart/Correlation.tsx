import { FC , useEffect,useState} from 'react';
import { getCorrelation } from '../../services';
import {Chart as ChartJS, CategoryScale,LinearScale, PointElement, LineElement, Title,Tooltip,Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Chart.js Line Chart',
    },
  },
};


// Functional component for the Correlation Chart
export const Correlation:FC = () => {
  const[correlation, setCorrelation] = useState({})
  useEffect(() =>{
      getCorrelation('https://protected-headland-74973.herokuapp.com/correlation')
        .then(correlation=>{
          setCorrelation(correlation)
        }).catch(err => ()=> console.log(err))
  },[])

  // removing unused columns 
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
  return <Line options={options} data={data} />
}


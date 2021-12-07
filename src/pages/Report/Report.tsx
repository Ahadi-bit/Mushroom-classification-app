import { FC } from 'react';
import { Text,Correlation,FeatureChart, PopulationChart} from '../../components';
import {Typography} from '@mui/material';



// Reports Page
export const Report: FC = () => {

  return (
    <>
        <Text heading="Mushroom Reports!" subtitle="Here you can find an analysis that can help you learn more about the Data we are using"/>
        <Typography variant="body1" component="div"
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center'
            }}>
            Feature distributution
          </Typography>
          <Typography variant="body1" component="div"
            sx={{
              display: 'flex',
              marginTop: '15px',
              justifyContent: 'center'
            }}>
            edible and poisonous mushroom based on feature. To understand what the labels mean head over to the information page to get a description
          </Typography>
          <br/>
        <FeatureChart />
          <br/>
          <br/>
          <Typography variant="body1" component="div"
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center'
            }}>
            Mushroom Population Type Percentage
          </Typography>
          <br/>
        <PopulationChart />
        <br/>
        <br/>
        <Typography variant="body1" component="div"
            sx={{
              display: 'flex',
              marginTop: '15px',
              textAlign: 'center',
              justifyContent: 'center'
            }}>
            Correlation Chart
          </Typography>
          <Typography variant="body2" component="div"
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center'
            }} >
            Here you can find a correlation chart that tell you what items are the most important to find whenever you are distinguishing the edibility of a mushroom. 
            The features that are trending negatively are correlations with a poisonous mushroom while a positive trend means they correspond
            with a edible mushrooms.
          </Typography>
          <br/>
          <Correlation/>

    </>
  );
};
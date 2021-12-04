import { FC } from 'react';
import { Text,Correlation } from '../../components';
import {Grid,Typography} from '@mui/material';


export const Report: FC = () => {

  return (
    <>
        <Text heading="Mushroom Reports!" subtitle="Here you can find an analysis that can help you learn more about the Data we are using"/>
        
        <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}className="form-container">
          <Grid item xs={5} sx={{display:{xs:'none', md:'block'}}}>
            <Typography variant="body1" component="div"
            sx={{
              display: 'flex',
              marginTop: '15px',
              textAlign: 'center',
              marginLeft: '10%'
            }}>
            Correlation Chart
          </Typography>
          <Typography variant="body2" component="div"
            sx={{
              display: 'flex',
              marginTop: '5px',
              textAlign: 'left',
              marginLeft: '10%'
            }} >
            Here you can find a correlation chart that tell you what items are the most important to find whenever you are distinguishing the edibility of a mushroom. 
            The features that are trending negatively are correlations with a poisonous mushroom while a positive trend means they correspond
            with a edible mushrooms.
          </Typography>
          </Grid>
          <Grid item sm={12} md={7}> <Correlation /></Grid>
        </Grid>

    </>
  );
};
import {FC} from 'react'
import { Text,FeatureTable } from '../../components';
import anatomy from '../../image/anatomy.jpg'
import Container from '@mui/material/Container';


// Information Page
export const InfoPage: FC = () => {
  return (
    <div>
      <Text heading="Information Page" subtitle="Here you can find definitions on each feature."/>
      <FeatureTable></FeatureTable>

      <Text heading="Mushroom Anatomy" subtitle="The anatomy of a mushroom"/>
      <Container maxWidth="sm" >
        <img style={{width:"100%"}} src={anatomy}/>
      </Container>
    </div>
  )
}


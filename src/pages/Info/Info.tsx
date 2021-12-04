import {FC} from 'react'
import { Text,FeatureTable } from '../../components';

export const InfoPage: FC = () => {
  return (
    <div>
      <Text heading="Information Page" subtitle="Here you can find definitions on each feature."/>
      <FeatureTable></FeatureTable>
    </div>
  )
}


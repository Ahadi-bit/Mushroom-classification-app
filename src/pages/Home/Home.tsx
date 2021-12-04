import { FC } from 'react';
import {Form} from '../../components/Form'
import { Container } from "@mui/material/";


export const Home: FC = () => {

  return (
    <Container sx={{marginTop:"10px"}}>
      <Form/>
    </Container>
  );
};

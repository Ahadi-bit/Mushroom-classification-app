import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Paper, Typography, Container } from '@mui/material/';
import { FormInputDropdown } from './Form-Components';
import Grid from '@mui/material/Grid';
import { mushroomFeature } from '../../mushroomFeatures';
import './Form.css';

interface IFormInput {
  capSurface: number;
  bruises: number;
  odor: number;
  gillAttachment: number;
  gillSpacing: number;
  gillSize: number;
  gillColor: number;
  stalkShape: number;
  stalkRoot: number;
  stalkSurfaceAboveRing: number;
  stalkSurfaceBelowRing: number;
  stalkColorAboveRing: number;
  stalkColorBelowRing: number;
  ringNumber: number;
  population: number;
  habitat: number;
}

const defaultValues: IFormInput = {
  capSurface: 0,
  bruises: 0,
  odor: 0,
  gillAttachment: 0,
  gillSpacing: 0,
  gillSize: 0,
  gillColor: 0,
  stalkShape: 0,
  stalkRoot: 0,
  stalkSurfaceAboveRing: 0,
  stalkSurfaceBelowRing: 0,
  stalkColorAboveRing: 0,
  stalkColorBelowRing: 0,
  ringNumber: 0,
  population: 0,
  habitat: 0,
};

export const Form: FC = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

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
        <Grid item xs={6}>
          <FormInputDropdown
            name="capSurface"
            control={control}
            label="Cap Surface"
            menuItems={mushroomFeature[0].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="bruises"
            control={control}
            label="Bruises"
            menuItems={mushroomFeature[1].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="odor"
            control={control}
            label="Odor"
            menuItems={mushroomFeature[2].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillAttachment"
            control={control}
            label="Gill Attachment"
            menuItems={mushroomFeature[3].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillSpacing"
            control={control}
            label="Gill Spacing"
            menuItems={mushroomFeature[4].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillSize"
            control={control}
            label="Gill Size"
            menuItems={mushroomFeature[5].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillColor"
            control={control}
            label="Gill Color"
            menuItems={mushroomFeature[6].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkShape"
            control={control}
            label="Stalk Shape"
            menuItems={mushroomFeature[7].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkRoot"
            control={control}
            label="Stalk Root"
            menuItems={mushroomFeature[8].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkSurfaceAboveRing"
            control={control}
            label="Surface Above Ring"
            menuItems={mushroomFeature[9].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkSurfaceBelowRing"
            control={control}
            label="Surface Below Ring"
            menuItems={mushroomFeature[10].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkColorAboveRing"
            control={control}
            label="Color Above Ring"
            menuItems={mushroomFeature[11].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkColorBelowRing"
            control={control}
            label="Color Below Ring"
            menuItems={mushroomFeature[12].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="ringNumber"
            control={control}
            label="Ring Number"
            menuItems={mushroomFeature[13].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="population"
            control={control}
            label="Population"
            menuItems={mushroomFeature[14].options}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="habitat"
            control={control}
            label="Habitat"
            menuItems={mushroomFeature[15].options}
          />
        </Grid>
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

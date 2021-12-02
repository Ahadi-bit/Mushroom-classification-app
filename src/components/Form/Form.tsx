import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Paper, Typography, Container } from '@mui/material/';
import { FormInputDropdown } from './Form-Components';
import Grid from '@mui/material/Grid';
import { mushroomFeature } from '../../mushroomFeatures';
import { IFormInput } from '../../interfaces/formModel';
import './Form.css';
import {
  defaultValues,
  validation,
} from '../../services/validation/validation';

export const Form: FC = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const [FormError, setError] = useState(false);
  const [errorLabel, setErrorLabel] = useState();
  const { handleSubmit, reset, control } = methods;

  const onSubmit = (data: IFormInput) => {
    const valid = validation(data);
    if (valid['isValid']) {
    } else {
      setErrorLabel(valid['feature']);
      setError(true);
    }
  };

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
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="bruises"
            control={control}
            label="Bruises"
            menuItems={mushroomFeature[1].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="odor"
            control={control}
            label="Odor"
            menuItems={mushroomFeature[2].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillAttachment"
            control={control}
            label="Gill Attachment"
            menuItems={mushroomFeature[3].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillSpacing"
            control={control}
            label="Gill Spacing"
            menuItems={mushroomFeature[4].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillSize"
            control={control}
            label="Gill Size"
            menuItems={mushroomFeature[5].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="gillColor"
            control={control}
            label="Gill Color"
            menuItems={mushroomFeature[6].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkShape"
            control={control}
            label="Stalk Shape"
            menuItems={mushroomFeature[7].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkRoot"
            control={control}
            label="Stalk Root"
            menuItems={mushroomFeature[8].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkSurfaceAboveRing"
            control={control}
            label="Surface Above Ring"
            menuItems={mushroomFeature[9].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkSurfaceBelowRing"
            control={control}
            label="Surface Below Ring"
            menuItems={mushroomFeature[10].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkColorAboveRing"
            control={control}
            label="Color Above Ring"
            menuItems={mushroomFeature[11].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="stalkColorBelowRing"
            control={control}
            label="Color Below Ring"
            menuItems={mushroomFeature[12].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="ringNumber"
            control={control}
            label="Ring Number"
            menuItems={mushroomFeature[13].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="population"
            control={control}
            label="Population"
            menuItems={mushroomFeature[14].options}
            error={FormError}
            errorLabel={errorLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputDropdown
            name="habitat"
            control={control}
            label="Habitat"
            menuItems={mushroomFeature[15].options}
            error={FormError}
            errorLabel={errorLabel}
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

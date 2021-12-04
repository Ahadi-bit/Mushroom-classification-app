import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button,Container } from '@mui/material/';
import { FormInputDropdown } from './Form-Components';
import Grid from '@mui/material/Grid';
import { mushroomFeature } from '../../mushroomFeatures';
import { IFormInput } from '../../interfaces/formModel';
import {postForm} from '../../services/api/api';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Text } from '..';

import './Form.css';

import {
  defaultValues,
  validation,
} from '../../services/validation/validation';

export const Form: FC = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const [FormError, setError] = useState(false);
  const [errorLabel, setErrorLabel] = useState('');
  const { handleSubmit, reset, control } = methods;
  const[open,setOpen] = useState(false);
  const[predict, setPredict] = useState('')
  const[edible, setEdible] = useState(0)
  const[poisonous, setPoisonous] = useState(0)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))


  const confidenceEdible = edible > 75 ? `Edible percentage: ${edible}%`:`(Edible percentage: ${edible}%)so be careful!`
  const confidencePoisonous = poisonous > 75 ? `Poisonous percentage: ${edible}%`:`(Poisonous percentage: ${edible}%) so be careful!`

  const confidenceText = predict === "Poisonous Mushroom" ? confidencePoisonous: confidenceEdible;
  const onSubmit = (data: IFormInput) => {
    const valid = validation(data);
    if (valid['isValid']) {
      postForm('https://protected-headland-74973.herokuapp.com/predict',data).then((prediction)=>{
        setEdible(prediction[1])
        setPoisonous(prediction[2])
        setPredict(prediction[0])})
      .then(()=> setOpen(true))
    } else {
      setErrorLabel(valid['feature']);
      setError(true);
    }
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <>
      <Text heading="Welcome to the Mushroom app!" subtitle="Is your mushroom edible or not? Fill out the form below to find out!"/>
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}className="form-container">

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
        <Dialog open={open} fullScreen={fullScreen} onClose={handleClose} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title" sx={{textAlign:'center'}}>
            This is a {predict.toLowerCase()}!
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{position:'relative', textAlign:'center'}}>Confidence percentage:</DialogContentText>
            <DialogContentText sx={{ position:'relative'}}>
              {confidenceText}
            </DialogContentText>
            <DialogContentText style={{width:'100%',height:'0',paddingBottom:'100%', position:'relative'}}>
              <iframe src={predict==="Edible Mushroom"? "https://giphy.com/embed/bSEkPdQfsSHCMYn7fD": "https://giphy.com/embed/XZYU1eBnPPC67Dh8Uw"} width="100%" height="100%" style={{position:'absolute',display:'block'}} frameBorder="0" className="giphy-embed"  title="mushroom" allowFullScreen></iframe>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained" color="secondary">
              Close
            </Button>
        </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

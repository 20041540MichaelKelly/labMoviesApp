import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function TemplateFantasyMoviePage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const errorMessage = "";
  const genres = ["comedy","horror","action","drama","fantasy","Romance","thriller"]

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    const {  error } = await supabase.from("fantasy_movies")
            .insert(
                      {   
                        title: formData.get("title"), 
                        run_time: formData.get("time"),
                        genres: formData.get("genres"),
                        production_companys: formData.get("productionCompanys"),
                        overview: formData.get("overview")
                      }
                  )

                        console.log(errorMessage);

    if (error) {
      return <h1>{error.message}</h1>;

    } else {
        <SuccessAlert />    
    }
   setLoading(false)

    console.log(formData);
    console.log(formData.get("title"))
    console.log(formData.get("time"))
    console.log(formData.get("genres"))
    console.log(formData.get("productionCompany"))
    console.log(formData.get("overview"))

}

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Fantasy Movie
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container direction={"row"} spacing={2}>
            <Grid item xs={12}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
            />
            </ Grid>
            <Grid item xs={12}>

            <TextField
                id="overview"
                label="Overview"
                name="overview"
                fullWidth
                multiline
                variant="standard"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id="production"
                label="Production Company"
                name="productionCompany"
                autoFocus
            />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h5" fontWeight= 'bold' >Run Time</Typography>
            <Slider
                id="time"
                name="time"
                aria-label="Always visible"
                defaultValue={75}
                // getAriaValueText={valuetext}
                step={5}
                max={240}
                fullwidth
                valueLabelDisplay="on"
            />
            </Grid>
           
          <Grid item xs={12}>
          <Typography component="h5" fontWeight= 'bold' >Genres</Typography>
          <Box sx={{ borderRight: 1 }}>
           <FormGroup id="genres">
           {...genres.map((g) => (
          <FormControlLabel
            name="genres"
            control={<Checkbox id={g} value={g} color="primary" />}
            label = {g}
          />
          ))} 
          </FormGroup> 
          </Box>
          </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

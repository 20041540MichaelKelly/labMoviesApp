import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";
import Alert from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SuccessAlert from "../../alerts/successAlert";
import UploadIcon from '@mui/icons-material/Upload';
import Spinner from '../../spinner';

export default function TemplateFantasyMoviePage() {
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState(new Date())
  const [imageUrl, setImageUrl] = useState("")

  const errorMessage = "";
  const genres = ["comedy", "horror", "action", "drama", "fantasy", "Romance", "thriller"]

  const handleImageUpload = async (event) => {
    event.preventDefault()

    setImageUrl(event.target.value);
    const avatarFile = event.target.files[0]
    const imageUrlSanitised = imageUrl ? imageUrl.split('\\').pop() : ""; //double dash becuse it thinks it an escape if not
    const { error: uploadError } =  supabase
      .storage
      .from('images')
      .upload(avatarFile.name, avatarFile, {
        cacheControl: '3600',
        upsert: false
      })

    if (uploadError) {
      throw uploadError;
    }

  }

  // const handleImageUpload = async (event) => {
  //   setImageUrl(event.target.value);
  //   const file = event.target.files[0]
  //   const imageUrlSanitised = imageUrl ? imageUrl.split('\\').pop() : ""; //double dash becuse it thinks it an escape if not
  //   let { error: uploadError } = await supabase.storage
  //     .from("avatars")
  //     .upload(imageUrlSanitised, file);

  //   if (uploadError) {
  //     throw uploadError;
  //   }
  // }

  const handleDateChange = async (event) => {
    setDate(event.target.value);

  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    const { error } = await supabase.from("fantasy_movies")
      .insert(
        {
          title: formData.get("title"),
          run_time: formData.get("time"),
          genres: formData.get("genres"),
          production_companys: formData.get("productionCompany"),
          overview: formData.get("overview"),
          date: date,
          image: imageUrl
        }
      )


    if (error) {
      return <h1>{error.message}</h1>;

    } else {
      return <Spinner />;
    }
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
                margin="normal"
                minRows={10}
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
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="h5" fontWeight='bold' >Run Time (mins)</Typography>
              <Slider
                id="time"
                name="time"
                aria-label="Always visible"
                defaultValue={75}
                step={5}
                max={240}
                fullwidth
                valueLabelDisplay="on"
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker fullwidth onChange={handleDateChange} />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>

              <input
                accept="image/*"
                id="raised-button-file"
                name="files"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="raised-button-file">
                <Button component="span" variant="outlined" startIcon={<UploadIcon />} >
                  Upload Image
                </Button>
              </label>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h5" fontWeight='bold' >Genres</Typography>
              <Box sx={{ borderRight: 1 }}>
                <FormGroup id="genres">
                  {...genres.map((g) => (
                    <FormControlLabel
                      name="genres"
                      control={<Checkbox id={g} value={g} color="primary" />}
                      label={g}
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

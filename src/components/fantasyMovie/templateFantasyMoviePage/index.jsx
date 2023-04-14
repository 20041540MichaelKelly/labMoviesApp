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
import Snackbar from "@mui/material/Snackbar";
import styles from '../../reviewForm/styles';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

export default function TemplateFantasyMoviePage() {
  const [date, setDate] = useState(new Date())
  const [imageUrl, setImageUrl] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [errorHappened, setErrorHappened] = useState(false)
  const [open,setOpen] = useState(false)
  const navigate = useNavigate();

  const genres = ["comedy", "horror", "action", "drama", "fantasy", "Romance", "thriller"]

  const handleSnackClose = async (event) => {
    setOpen(false);
    navigate("/movies/fantasy");
  }

  const handleErrorClose = async (event) => {
    setErrorHappened(false);
  }


  const handleImageUpload = async (event) => {
    event.preventDefault()

    setImageUrl(event.target.value);
    const avatarFile = event.target.files[0]
    const { error: uploadError } = supabase
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

  const handleDateChange = async (event) => {
    setDate(event.target.value);

  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);

    const { error, loading } = await supabase.from("fantasy_movies")
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
      setErrorMessage(error.message)
      setErrorHappened(true)
    } else {
      setOpen(true)
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
        <Snackbar
          sx={styles.snack}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={errorHappened}
          onClose={handleErrorClose}
        >
          <Alert severity="error"
            open={errorHappened}
            onClose={handleErrorClose}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleErrorClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}>
            {errorMessage}</Alert>
        </Snackbar>
        <Snackbar
          sx={styles.snack}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleSnackClose}
        >
          <Alert severity="success"
            open={open}
            onClose={handleSnackClose}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleSnackClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}>
            <Typography variant="h4">
              Fantasy Movie: create successfully 
            </Typography>
          </Alert>
        </Snackbar>
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
                validate="true"
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
                validate="true"
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
                      defaultValue={g[0]}
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

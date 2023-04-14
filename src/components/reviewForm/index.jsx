import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import ratings from "./ratingCategories";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { supabase } from "../../supabaseClient";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: theme.spacing(2),
  },
  snack: {
     width: "50%",
     "& > * ": {
       width: "100%",
     },
   },
}));

const ReviewForm = ({ movie }) => {
  const classes = useStyles();

  // const defaultValues = {
  //   author: "",
  //   review: "",
  //   agree: false,
  //   rating: "3",
  // };
  // const {
  //   control,
  //   formState: { errors },
  //   reset,
  // } = useForm(defaultValues);
  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [rating, setRating] = useState(3);
  const [open, setOpen] = useState(false);


  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSnackClose = (event) => {
    setOpen(false);
    //navigate("/movies/${movie.id}");
    navigate(`/movies/${movie.id}`);
  };

 const addRatings = async (formData)=> {
  const { error} =  await supabase.from("reviews")
  .insert(
    {
      movieId: movie.id,
      rating: formData.get("rating"),
      content: formData.get("content"),
      author: formData.get("author"),
    }
  ) 
 
if (error) {
  throw error
} else {
  setOpen(true);
}
  
 }

  const handleSubmit =  async(event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const { error} =  await supabase.from("reviews")
    .insert(
      {
        movieId: movie.id,
        rating: formData.get("rating"),
        content: formData.get("content"),
        author: formData.get("author"),
      }
    ) 
   
  if (error) {
    throw error
  } else {
    setOpen(true);
  }
      }

  return (
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
            Thank you for signing up
          </Typography>
        </Alert>
      </Snackbar>
      <Box component="form" onSubmit={handleSubmit} validate="true">
      <Typography component="h2" variant="h3">
        Write a review
      </Typography>
      

        <TextField
          sx={{ width: "40ch" }}
          variant="outlined"
          margin="normal"
          required
          id="author"
          name="author"
          label="Author's name"
          autoFocus
        />

        <TextField
          name="content"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Review text"
          id="review"
          multiline
          minRows={10}
        />




        <TextField
          name="rating"
          id="rating"
          select
          variant="outlined"
          label="Rating Select"
          value={rating}
          onChange={handleRatingChange}
          helperText="Don't forget your rating"
        >
          {ratings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <Box sx={styles.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewForm;

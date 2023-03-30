import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function BasicPagination() {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
      setPage(value);
      navigate(`/movies/page/${value}`)
    };
    
  return (
    <Grid container spacing={3}>
        <Grid item xs={3}>
        
        </Grid>

    <Grid item xs={6}>
        <Item>
            <Pagination count={50} color="primary" onChange={handleChange} />
        </Item>
    </Grid>
    <Grid item xs={3}>
        
    </Grid>
   </Grid>
  );
}
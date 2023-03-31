import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'orange',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function BasicPagination({pg}) {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
      setPage(event.target.value)
    
      navigate(`/movies/page/${value}`)
    };

    var pageNum = pg ? pg : page;
    
  return (
    <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>
    <Grid item xs={8}>
        <Item>
            <Typography>Page: {pageNum}</Typography>
            <Pagination count={50} boundaryCount={10} page={pageNum} color="secondary" onChange={handleChange} 
            renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  onChange={handleChange}
                />
              )}/>
        </Item>
    </Grid>
    <Grid item xs={2}>  
    </Grid>
   </Grid>





  );
}

export default BasicPagination;
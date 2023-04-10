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
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#62d71f',
  ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function BasicPagination({ urlValue, pg }) {
    var pageNum = pg ? pg : 1;

    const navigate = useNavigate();
    const [page, setPage] = React.useState(Number(pageNum));

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      navigate(`${urlValue}${newPage}`)
    };

  return (
    <Grid container spacing={2} sx={{py:2}}>
      <Grid item xs={12} md={12}>
        <Item>
            <Typography>Page: {pageNum}</Typography>
            <Pagination count={35} boundaryCount={35} page={page} color="secondary" onChange={handleChangePage} 
             renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  onChange={handleChangePage}
                  />
               )}/> 
        </Item>
        </Grid>
   </Grid>
  );
}

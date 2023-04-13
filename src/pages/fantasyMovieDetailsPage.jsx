import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/fantasyMovie/fantasyMovieDetails";
import PageTemplate from "../components/fantasyMovie/fantasyTemplate";
import Spinner from '../components/spinner';
import { supabase } from '../supabaseClient';

const FantasyMovieDetailsPage = () => {
  const { id } = useParams();

  const [fantasy, setFantasy] = useState([]);
    const [errorHappened, setErrorHappened] = useState()
    const [errorMessage, setErrorMessage] = useState("")


    const fetchFantasyMovies = async () => {
        const { data, error, isLoading } = await supabase
            .from('fantasy_movies')
            .select()
            .eq('id', id)

        if (isLoading) {
            return <Spinner />;
        }

        if (error) {
            setErrorHappened(true);
            setErrorMessage(error.message)
        } else {
            setFantasy(data)
        }
    }


    useEffect(() => {
        async () => {
        await fetchFantasyMovies()
}}, []);
  

  return (
    <>
      {fantasy ? (
        <>
          <PageTemplate movie={fantasy}>
            <MovieDetails movie={fantasy}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default FantasyMovieDetailsPage;

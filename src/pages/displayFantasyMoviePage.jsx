import React, { useEffect, useState } from "react";
import PageTemplate from '../components/fantasyMovie/templateFantasyListPage'
import Spinner from "../components/spinner";
import { supabase } from "../supabaseClient";

const MostPopularMoviesPage = (props) => {
    //   const { page } = useParams();
    const [fantasy, setFantasy] = useState([]);
    const [errorHappened, setErrorHappened] = useState()
    const [errorMessage, setErrorMessage] = useState("")


    const fetchFantasyMovies = async () => {
        const { data, error, isLoading } = await supabase
            .from('fantasy_movies')
            .select()

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
        fetchFantasyMovies()
    }, []);

    return (
        <>
            <PageTemplate
                title='Fantasy Movies'
                movies={fantasy}
            />
        </>
    );
};
export default MostPopularMoviesPage;

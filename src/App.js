import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movie, setMovies] = useState([]);
  const[error,setError]=useState(null);
//for async code handle error 


  async function fetchMoviesHandler() {
    setError(null);

    // if we have to handle errors in asyc code then try and catch block is used 
    try{
    // fetch the data using the link
    const responce=fetch("https://swapi.dev/api/films");
    const data=await response.json();
    // userdefined error code
      if(!responce.ok){
        throw new Error("Something went wrong");
      }
        const transformedMovies = data.results.map((moviesData) => {
          //whatever data is coming we will map it moviesData variable
          // below return stmt written for converting the json format responce into userDefined format
          return {
            id: moviesData.episode_id,
            titile: moviesData.titile,
            openingText: moviesData.opening_crawl,
            releaseDate: moviesData.release_date,
          };
        });
        setMovies(transformedMovies);
    }catch(error){
       setError(error.message)
    }

   
  }


  // this is static data passing
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;

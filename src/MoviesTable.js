import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MoviesTable(props) {
    const rows = [];
    let lastMovie = null;
  
    props.movies.forEach((movie) => {
      if (
        movie.title.toLowerCase().indexOf(
            props.searchText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (
        movie.genre.toLowerCase().indexOf(
            props.genre.toLowerCase()
        ) === -1
      ) {
        return;
      }
      rows.push(
       <MovieCard data={movie}/>
      );
      lastMovie = props.genre;
    });
  
    return (
     <>
     <div class="container">
    <div class="row">
     {rows}
     </div>
     </div>
     </>
    );
  }

  export default MoviesTable
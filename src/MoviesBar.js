import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MoviesTable from "./MoviesTable"


function MoviesBar(){

    const MOVIES = [
        {genre: "Action", title: "Blue Beetle (2023)", link: "https://www.imdb.com/title/tt9362930/?ref_=adv_li_tt", about: "An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle"},
        {genre: "Action", title: "Rebel Moon (2023)", link: "https://www.imdb.com/title/tt14998742/?ref_=adv_li_tt", about: "When a peaceful colony on the edge of a galaxy finds itself threatened by the armies of a tyrannical ruling force, a mysterious stranger living amongst its villagers becomes their best hope for survival"},
        {genre: "Comedy", title: "Guardians of the Galaxy Vol. 3 (2023)", link: "https://www.imdb.com/title/tt6791350/?ref_=adv_li_tt", about: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful."},
        {genre: "Comedy", title: "Teenage Mutant Ninja Turtles: Mutant Mayhem (2023)", link: "https://www.imdb.com/title/tt8589698/?ref_=adv_li_tt", about: "The film follows the Turtle brothers as they work to earn the love of New York City while facing down an army of mutants."},
        {genre: "Drama", title: "Nimona (2023)", link: "https://www.imdb.com/title/tt19500164/?ref_=adv_li_tt", about: "When a knight in a futuristic medieval world is framed for a crime he didn't commit, the only one who can help him prove his innocence is Nimona -- a mischievous teen who happens to be a shapeshifting creature he's sworn to destroy."},
        {genre: "Drama", title: "PAW Patrol: The Mighty Movie (2023)", link: "https://www.imdb.com/title/tt15837338/?ref_=adv_li_tt", about: "A magical meteor crash lands in Adventure City, and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups"},
        {genre: "Fantasy", title: "The School for Good and Evil (2022)", link: "The School for Good and Evil (2022)", about: "Best friends Sophie and Agatha find themselves on opposing sides of an epic battle when they're swept away into an enchanted school where aspiring heroes and villains are trained to protect the balance between Good and Evil."},
        {genre: "Fantasy", title: "Raya and the Last Dragon (2021)", link: "https://www.imdb.com/title/tt5109280/?ref_=adv_li_tt", about: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon."}
      ];
      
   const[genre,setGenre]=useState('');
   const[searchText,setSearchText]=useState('');
   
 
    return <>
               <SearchBar
                 onGenreClick={setGenre}
                 onSearch={setSearchText}
                 searchText={searchText}
              />
              <MoviesTable
                movies={MOVIES}
                searchText={searchText}
                genre={genre}
              />
    </>

}

export default MoviesBar
import React  from "react"
import { useEffect } from "react"

function SearchBar(props)
{
    const Genres=['Action','Comedy','Drama','Fantasy']

  return <>
        
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
       <button name='All' className="btn btn-light" value='' onClick={(e)=>props.onGenreClick('')}>All</button>
    </li>
     {Genres.map((data,i)=>
      <li className="nav-item">
       <button name={i} className="btn btn-light" value={data} onClick={(e)=>props.onGenreClick(e.target.value)}>{data}</button>
      </li>
     )}
      <li className="nav-item dropdown">
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" value={props.searchText} onChange={(e)=>props.onSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>
        
        </>
}


export default SearchBar

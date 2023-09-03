import React from "react";

function MovieCard(props)
{
    return <>
         <div class="col-lg-3">
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="..." alt="Image content"/>
             <div className="card-body">
              <h5 className="card-title">{props.data.title}</h5>
               <p className="card-text">{props.data.about}</p>
                 
                 <h5 className="card-title">Ganre: {props.data.genre}</h5>

                 <a href={props.data.link} className="btn btn-primary">get</a>
            </div>
          </div>
          </div>
    </>
}
export default MovieCard
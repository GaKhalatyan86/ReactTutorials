import React, { useState } from  "react";
import ListButton from "./ListButton";


class  MainForm  extends React.Component 
{
   constructor(props)
   {
       super(props);

       this.state={
        counter:0
       };
   }
   handler=(val)=>
   {
     this.setState({counter:(this.state.counter+val)})
   }
   

   render(){  
       return <div>
                 <h2>{this.state.counter}</h2>
                <ListButton onClickHandler={this.handler}></ListButton>
              </div>;
   }
   
}

export default MainForm


import React from "react";
import "./notfound.css";

const  NotFound  = (props) =>{
  

    return (
       
          <div id="notfound">
            <div class="notfound">
              <div class="notfound-404">
                <h1>Oops!</h1>
                <h2>404 - The Page can't be found</h2>
              </div>
              <a href="#!" onClick={this.props.history.goBack}>Go Back</a>
            </div>
            </div>
        
    );
  
}
export default NotFound;
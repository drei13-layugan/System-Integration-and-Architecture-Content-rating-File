
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes:0,
      disLikes:0,
      handlelike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));

      },

      handleDislike:() => {
        this.setState((prevState) => ({
          disLikes: prevState.disLikes + 1
        }));
      }
    }
  }

  render() {
    return (
      <div className="content-rating">
       <p>
        //Add text here
        </p>
         <div className="rating-buttons">
           <button className="like-button" onClick={this.state.handlelike}>
            Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
              Dislike ({this.state.disLikes})
            </button>
          </div>      
     </div >
    );
  }
}

export default ContentRating;

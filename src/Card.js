import React, { Component } from "react";
import './Card.css';
class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="card-ctn">
                <div className="header">
                    <h2>{this.props.ques}</h2>
                </div>
                <div className="body">
                    <p>{this.props.ans}</p>
                </div>
            </div>
        )
    }
}
export default Card 
// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        
        // const xPoint = (event.clientX)
        // // console.log(`this is x ${xPoint}`)
        // const yPoint = (event.clientY)
        // // console.log(`this is y ${yPoint}`)
        // console.log(`${xPoint}, ${yPoint}`)
        
    }


    render() {
        return(
            <button onClick={this.handleClick}>Click Me!</button>
        )
    }
}
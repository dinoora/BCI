import React, {Component} from "react"
import sub_button from "./sub_button.png"
import unsub_button from "./unsub_button.png"
class NewComp extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Subscribe to BCI Campus",
            sub:"Subscribe",
            imageURL:sub_button
        };
    }

    styles={
        fontStyle:"italic",
        color:"purple"
    }

    ButtonChange=()=>{
        this.setState({
            message:"Hit the notification button",
            sub:"Subscribed"
        })
    }

    imageChange=()=>{
        this.setState({
            imageURL:unsub_button,
            message:"Let's learn together"
        })
    }

    render(){
        return(
            <div className="App">
                <h3 style={this.styles}> {this.state.message} </h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p/>
                <img style={{width:"100px", height:"100px"}} 
                scr={this.state.imageURL}
                onClick={this.imageChange} 
                alt=" "/>
            </div>
        );
    }
}
export default NewComp;
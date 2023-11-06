import React, {Component} from 'react'

class Classprops extends Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name} from {this.props.place}! Welcome to BCI Campus</h1>
                <h3>
                    {this.props.children}
                </h3>
            </div>
        )
    }
}
export default Classprops;
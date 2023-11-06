import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Alex'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshopBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'BCI'
        })
    }

    render(){
        console.log('LifeCycleA render')
        return(
            <div>
                LifeCycleA
                <button onClick={this.changeState}>Chanfe State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
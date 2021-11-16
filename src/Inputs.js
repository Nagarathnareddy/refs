import React, { Component } from 'react'

export default class Inputs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value:"",
            result:"",

             
        }
    }
    clickBtn=()=>
    {
        this.setState({value:this.name.value});
        (this.name.value>=35)?this.setState({result:"pass"}):this.setState({result:"fail"});
        console.log(this.state.value);
        console.log(this.state.result);
    }
    
    
    render() {
        return (
            <div>

                <input className="subjects" type="text" ref={(obj)=>
                {
                  this.name=obj  
                }
                }/>
                <button className="marks"  onClick={this.clickBtn}>Marks</button>
                <span className="pf">{this.state.result}</span>
            </div>
        )
    }
}

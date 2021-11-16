import React, { Component } from 'react'
import Inputs from './Inputs'


export default class Forms extends Component {
       constructor(props) {
           super(props)
       
           this.state = {
                total:"total",
                percentage:"%",
                grade:"No-Grade"
           }
       }
       
    
    total=()=>
    {
     let engMarks=this.engMarks.state.value;
     let telMarks=this.telMarks.state.value;
     let hinMarks=this.hinMarks.state.value;
     let matMarks=this.matMarks.state.value;
     let sciMarks=this.sciMarks.state.value;
     let socMarks=this.socMarks.state.value;
     let total=parseInt(engMarks)+parseInt(telMarks)+parseInt(hinMarks)+parseInt(matMarks)+parseInt(sciMarks)+parseInt(socMarks)
     this.setState({total:total});
     console.log(this.state.total)
     this.percentage(total);
    }
    percentage=(total)=>
    {
        let percentage=total/6
        console.log(percentage);
        this.setState({percentage:percentage});
        this.grade(percentage);

    }
    grade=(percentage)=>
    {
        if(percentage>=65)
        {
            this.setState({grade:'A'})
        }else if(percentage<64 &&percentage<=50)
        {
            this.setState({grade:'B'})
        }
        else{
            this.setState({grade:'C'})
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}Tenth Result</h1>
                <Inputs  ref={(engMarks)=>
                {
                 this.engMarks=engMarks
                 
                }
                }/>
                <Inputs ref={(telMarks)=>
                {
                 this.telMarks=telMarks
                 
                }} />
                <Inputs ref={(matMarks)=>
                    {
                     this.matMarks=matMarks
                     
                    }}/>
                <Inputs ref={(hinMarks)=>
                    {
                     this.hinMarks=hinMarks
                     
                    }}/>
                <Inputs ref={(sciMarks)=>
                    {
                     this.sciMarks=sciMarks
                     
                    }}/>
                <Inputs ref={(socMarks)=>
                    {
                     this.socMarks=socMarks
                     
                    }}/>
                <button className="btn" onClick={this.total} >Total</button>
                <div className="total">
                 <span>Total:{this.state.total}</span> 
                 <br/>
                 <span>percentage:{this.state.percentage}</span>
                 <br/>
                 <span>grade:{this.state.grade}</span>  

                </div>
            </div>
        )
    }
}

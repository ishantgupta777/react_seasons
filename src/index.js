import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lat : null, err : ''}
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({lat : pos.coords.latitude}),
            err => this.setState({err : err.message})
        )
    }
    
    render(){
       if(this.state.lat){
        return(
            <div>
                latitude : {this.state.lat}
            </div>
        )
       }else if(this.state.err){
           return(
               <div>
                   err : {this.state.err}
               </div>
           )
       }else{
           return <div> Loading... </div>
       }
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))
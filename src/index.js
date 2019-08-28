import React from 'react'
import ReactDOM from 'react-dom'
import SeasonsShow from './SeasonsShow'
import Loader from './loader'

class App extends React.Component {
    // dont need to create a constructor function for super or state, babel does that for us....

    // constructor(props) {
    //     super(props);
    //     this.state = {lat : null, err : ''}
    //     window.navigator.geolocation.getCurrentPosition(
    //         pos => this.setState({lat : pos.coords.latitude}),
    //         err => this.setState({err : err.message})
    //     )
    // }

    state = {lat : null, err : ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({lat : pos.coords.latitude}),
            err => this.setState({err : err.message})
        )
    }
    
    renderComponent(){
        if(this.state.lat){
            return(
                <div>
                    <SeasonsShow lat={this.state.lat} />
                </div>
            )
           }else if(this.state.err){
               return(
                   <div>
                       err : {this.state.err}
                   </div>
               )
           }else{
               return <div> <Loader message="please accept the location request" /> </div>
           }
    }

    render(){
        return <div>
            {this.renderComponent()}
        </div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))
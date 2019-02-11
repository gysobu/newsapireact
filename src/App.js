import React, { Component } from 'react';
import Sources from './Sources'

const sources_url=`https://newsapi.org/v2/sources?apiKey=ebb8a592d29044f6ad3564bfb4dc959a`
class App extends Component {
constructor(props){
  super(props)
  this.state={
    sources:[]

  }

}
  componentWillMount(){
    fetch(sources_url)
    .then((response)=>{
         return response.json()
    }).then((json)=>{
      // console.log(json.sources)
        this.setState=({
        sources:json.sources
      
      })
      
      
      })
      
      
  }
  
  
  render() {

    return (
      <div>
        
           <Sources sourcelist={this.state.sources} />
      </div>
    );
  }
}

export default App;

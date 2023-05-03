import React from 'react'
import Counter from './components/Counter'
import Person from './components/Person'
export default  class App extends React.Component{
    
    render(){
       
        return(
            <div>
              hello redux
              <Counter></Counter>
              <hr></hr>
              <Person></Person>
            </div>
        )
    }
}
import React from 'react'
import Welcome from './component/Welcome/index';
import Hello from './component/Hello/index';
class App extends React.Component{
    render(){
        return(
            <div>
               <Welcome/>
               <Hello/>
            </div>
        )
    }
}
export default App;

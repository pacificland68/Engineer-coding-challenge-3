import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import CustomLayout from './containers/Layout'
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component{


  render(){
    return(
      <div className="App">
        <Router>
          <CustomLayout {...this.props}>
              <BaseRouter />
          </CustomLayout>
        </Router>
        
      </div>
    )
  }
}


export default App;

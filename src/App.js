import React, { Component } from 'react';
import NavBar from './components/Layout/NavBar'
import Tracks from './components/tracks/Tracks'
import Lyric from './components/tracks/Lyric'
import { connect } from 'react-redux';
import {Grid} from 'react-bootstrap';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { fetchData } from './store/actions';
import './App.css';


class App extends Component {

  componentDidMount(){
        this.props.dispatch(fetchData())
  }

  render() {
    return (
      <React.Fragment>
        <NavBar/>
            <div className="container">
            <BrowserRouter>
              <Switch>
                <Grid>  
                  <Route exact path = "/" component={Tracks}/>
                  <Route exact path="/lyrics/track/:id" component={Lyric}/>
                </Grid>
              </Switch> 
              </BrowserRouter>
            </div>
          
      </React.Fragment>
     
    );
  }
}

export default connect()(App);

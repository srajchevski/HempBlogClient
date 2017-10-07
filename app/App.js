import React, {Component} from 'react';
import {hashHistory, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import Header from './components/header/header';
import Popup from 'react-popup';

class App extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
  }

  render() {
    return(
        <div className="banner-body">
          <div className="container" style={{width:"80%"}}>
            <Header/>
            {this.props.children}
            <Popup />
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
  }
}


function mapStateToProps(state) {
  var nextState = state.toJS();

  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

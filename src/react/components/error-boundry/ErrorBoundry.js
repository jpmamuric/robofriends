import React, { Component } from 'react';

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }

  render(){
    let style = {
      textAlign: 'center',
      fontSize: '4rem',
      marginTop: '2rem'
    }

    if (this.state.hasError) {
      return <h1 style={style}> Ooops. that is not good...</h1>
    };

    return this.props.children
  }
}

export default ErrorBoundry;

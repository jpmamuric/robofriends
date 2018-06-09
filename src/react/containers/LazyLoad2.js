import React, { Component } from 'react';

const LazyLoad2 = (importedComponent) => {
  class AsyncComponent extends Component {
    state = { component: null }

    async componentDidMount(){
      const { default: component } = await importedComponent();
      this.setState({ component })
    }

    render(){
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null}
  }

  return AsyncComponent;
}

export default LazyLoad2;

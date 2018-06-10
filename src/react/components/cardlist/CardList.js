import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CardList.css';
import Card from '../card/Card';
import { getRobots } from '../../../redux/actions/action-robots';

class CardList extends Component  {
  componentDidMount(){
    this.props.getRobots();
  }

  render(){
    const { list, filteredList } = this.props;
    // if(true) {
    //     throw new Error('Card list could not render');
    // }

    if (list.length === 0) {
      return <div> Loading... </div>
    }

    let renderList = filteredList.map(robot => <Card key={robot.id} robot={robot}/> )

    if(filteredList.length === 0) {
      renderList = list.map(robot => <Card key={robot.id} robot={robot}/> )
    }

    return (
      <ul className="robot__list">
        { renderList }
      </ul>
    );
  }
}

const mapStateToProps = ({ robots: { list, filter, filteredList }}) => ({ list, filteredList });

export default connect(mapStateToProps, {getRobots})(CardList);

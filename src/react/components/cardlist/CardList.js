import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CardList.css';
import Card from '../card/Card';
import { getRobots } from '../../../redux/actions/action-robots';

class CardList extends Component  {
  componentDidMount(){
    this.props.getRobots()
  }

  render(){
    const { list } = this.props;
    // if(true) {
    //     throw new Error('Card list could not render');
    // }

    if (list.length === 0) {
      return <div> Loading... </div>
    }

    return (
      <ul className="robot__list">
        { list.map(robot => <Card key={robot.id} robot={robot}/> ) }
      </ul>
    );
  }
}

const mapStateToProps = ({ robots: { list }}) => ({ list });

export default connect(mapStateToProps, {getRobots})(CardList);

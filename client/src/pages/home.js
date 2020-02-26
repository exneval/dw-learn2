import React, { Component } from "react";

import { connect } from "react-redux";

import { getSpecies } from "../_actions/species";

class Home extends Component {
  componentDidMount() {
    this.props.getSpecies();
  }

  render() {
    const { data, loading, error } = this.props.species;

    if (error) return <h1>There's an unknown error occured.</h1>;

    return loading ? (
      <h1>Now loading ...</h1>
    ) : (
      <>
        {data.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from "react";
import { connect } from "react-redux";

class Species extends Component {
  render() {
    const { data, loading } = this.props.species;
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

export default connect(mapStateToProps)(Species);

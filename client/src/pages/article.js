import React, { Component } from "react";
import { connect } from "react-redux";

class Article extends Component {
  render() {
    const { data } = this.props.articles;
    return <h1>{data.length}</h1>;
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(Article);

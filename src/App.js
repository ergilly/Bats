import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "./containers/Container";
// import containers
import "./App.css";

class App extends Component {
  componentDidMount() {
      this.props.getData()
    //anything you want to run straight away
  }

  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData() {
    dispatch(() => {
      fetch(`https://records-ws.nbnatlas.org/occurrences/search?q=Pipistrellus%20pipistrellus&pageSize=100000`)
        .then(res => res.json())
        .then(items => {
          dispatch({
            type: "ADD_ITEMS",
            items: items.occurrences
          });
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);

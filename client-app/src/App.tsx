import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axio from "axios";
import Axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

class App extends Component {
  state = {
    Val: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({
        Val: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2" icon>
          <Icon name="users" />

          <Header.Content>Reactivities</Header.Content>
        </Header>

        <List>
          {this.state.Val.map((values: any) => (
            <List.Item key={values.id}>{values.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;

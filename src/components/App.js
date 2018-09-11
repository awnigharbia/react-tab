import React, { Component } from "react";
import { Tabs, Tab } from "./";

// Tabs default config
const config = {
  radius: "3px",
  bottom: false,
  color: "black",
  activeColor: "red",
  tabs: [
    {
      label: "Tab1",
      disabled: true
    },
    {
      label: "Tab1"
    },
    {
      label: "Tab1"
    }
  ]
};

class App extends Component {
  render() {
    return (
      <Tabs {...config}>
        <Tab>Hello</Tab>
        <Tab>Hello2</Tab>
        <Tab>Hello3</Tab>
      </Tabs>
    );
  }
}

export default App;

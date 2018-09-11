import React, { Component } from "react";
import { HeadWrapper } from "./style";

export default class Tab extends Component {
  render() {
    return <HeadWrapper.content>{this.props.children}</HeadWrapper.content>;
  }
}

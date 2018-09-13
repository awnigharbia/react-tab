import React, { Component, Fragment } from "react";
import { TabsWrapper } from "./style";
import { TabPanels } from "../";

export default class Tabs extends Component {
  state = {
    activeTab: this.props.tabs.findIndex(x => x.disabled === true) + 1
  };

  setActiveTab = activeTab => this.setState({ activeTab });

  render() {
    const { radius, bottom } = this.props;

    return (
      <TabsWrapper radius={radius} data-testid="tabs">
        {bottom ? (
          <Fragment>
            {this.props.children[this.state.activeTab]}
            <TabPanels
              {...this.props}
              {...this.state}
              setActiveTab={this.setActiveTab}
            />
          </Fragment>
        ) : (
          <Fragment>
            <TabPanels
              {...this.props}
              {...this.state}
              setActiveTab={this.setActiveTab}
            />
            {this.props.children[this.state.activeTab]}
          </Fragment>
        )}
      </TabsWrapper>
    );
  }
}

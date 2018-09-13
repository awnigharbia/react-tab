import React, { Component } from "react";
import { HeadWrapper } from "./style";

export default class TabPanels extends Component {
  render() {
    const { color, activeColor, activeTab } = this.props;
    return (
      <HeadWrapper>
        {this.props.tabs.map((item, key) => {
          return (
            <HeadWrapper.head
              key={key}
              isActive={activeTab === key}
              color={color}
              activeColor={activeColor}
              disabled={item.disabled}
              data-testid="head"
              onClick={() =>
                item.disabled ? null : this.props.setActiveTab(key)
              }
            >
              {item.label}
            </HeadWrapper.head>
          );
        })}
      </HeadWrapper>
    );
  }
}

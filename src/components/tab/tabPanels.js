import React, { Component } from "react";
import { HeadWrapper } from "./style";

export default class TabPanels extends Component {
  render() {
    const { color, activeColor, activeTab } = this.props;
    return (
      <HeadWrapper>
        {this.props.tabs.map((item, key) => {
          const isActive = activeTab === key;

          return (
            <HeadWrapper.head
              isActive={isActive}
              color={color}
              activeColor={activeColor}
              key={key}
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

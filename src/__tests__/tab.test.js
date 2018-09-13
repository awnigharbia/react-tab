import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { Tabs, Tab, TabPanels } from "../components";

afterEach(cleanup);

const props = {
  radius: "3px",
  bottom: false,
  color: "black",
  activeColor: "red",
  tabs: [
    {
      label: "Tab1"
    },
    {
      label: "Tab1"
    },
    {
      label: "Tab1"
    }
  ]
};

describe("Tabs", () => {
  it("Tab render head", () => {
    const { getByTestId } = render(
      <Tabs {...props}>
        <Tab>Hello</Tab>
        <Tab>Hello2</Tab>
        <Tab>Hello3</Tab>
      </Tabs>
    );

    const elem = getByTestId("head");
    const tabs = getByTestId("tabs");

    expect(elem.innerHTML).toBe("Tab1");
    expect(tabs.children.length).toBe(2);
  });

  it("Select a tab", () => {
    const setActiveTab = jest.fn();
    const { getByTestId } = render(
      <TabPanels setActiveTab={setActiveTab} {...props} />
    );

    fireEvent.click(getByTestId("head"));

    expect(setActiveTab).toHaveBeenCalledTimes(1);
    expect(setActiveTab).toBeCalledWith(0);
  });

  it("Tab renders a content", () => {
    const { getByText } = render(<Tab>Hello</Tab>);

    const elem = getByText("Hello");
    expect(elem.innerHTML).toBe("Hello");
  });
});

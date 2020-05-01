import React from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

import DashboardContainer from "./containers/Dashboard/DashboardContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("CANDIDATE TESTS", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(container);
  });

  //TODO:  Add your site or application tests here
  it("renders DashboardContainer ", () => {
    render(<DashboardContainer />, container);
  });

  it(" ", () => {
    const onChange = jest.fn();
    act(() => {
      render(<DashboardContainer onChange={onChange} />, container);
    });
  });
});

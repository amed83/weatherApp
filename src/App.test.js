import React from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

import DashboardContainer from "./containers/Dashboard/DashboardContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
  unmountComponentAtNode(div);
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
});

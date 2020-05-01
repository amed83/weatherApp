import React from "react";
import ReactDOM, { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import LatestResults from "./LatestResults";

describe("LatestResults ", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
  });
  it(" displays the names of cities with upper case", () => {
    act(() => {
      render(
        <LatestResults
          latest={[
            {
              id: 1,
              name: "London",
            },
            {
              id: 2,
              name: "rome",
            },
          ]}
        />,
        container
      );
    });
    const results = container.querySelector("[data-testid='latest-results']");
    expect(results.children[0].textContent).toBe("LONDON");
    expect(results.children[1].textContent).toBe("ROME");
  });
});

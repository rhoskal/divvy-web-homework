import React from "react";
import { render } from "@testing-library/react";

import { Error } from "./error";

describe("[Component] Error", () => {
  it("should match snapshot", () => {
    const { container } = render(<Error />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

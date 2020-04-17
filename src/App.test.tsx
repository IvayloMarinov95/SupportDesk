import React from "react";
import { render } from "@testing-library/react";
import Support from "./components/Support/Support";

test("Support Desk", () => {
  const { getByText } = render(<Support />);
  const supportDeskElement = getByText(/support desk/i);
  expect(supportDeskElement).toBeInTheDocument();
});

test("Search Box", () => {
  const { getByPlaceholderText } = render(<Support />);
  const searchBox = getByPlaceholderText(/search/i);
  expect(searchBox).toBeInTheDocument();
});

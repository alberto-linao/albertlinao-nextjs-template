/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import BirthdayPage, { metadata } from "./birthday";

it("Birthday page works with Server Components", () => {
  render(<BirthdayPage />);
  expect(screen.getByRole("heading")).toHaveTextContent("Birthday Celebrants");
});

it("Birthday page has metadata", () => {
  expect(metadata).toEqual({
    title: "Birthday Celebrants",
  });
});

it("App Router: Has a birthday message", () => {
  render(<BirthdayPage />);
  expect(screen.getByText("Happy Birthday!")).toBeInTheDocument();
});

it("Contains message 'Ranz Manalo'", () => {
  render(<BirthdayPage />);
  expect(screen.getByText("Ranz Manalo!")).toBeInTheDocument();
});

it("Birthday List contains name of person", () => {
  render(<BirthdayPage />);
  expect(screen.getAllByRole("listitem")[0]).toHaveTextContent("John Doe");
});

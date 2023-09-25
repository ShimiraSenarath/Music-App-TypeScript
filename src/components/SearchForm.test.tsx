import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

test("username input should be rendered", () => {
    render(<SearchForm />);
    const usernameInputEl = screen.getByPlaceholderText(/Search/i);
    expect(usernameInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<SearchForm />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<SearchForm />);
  const usernameInputEl = screen.getByPlaceholderText(/Search/i)as HTMLInputElement;
  expect(usernameInputEl.value).toBe("");
});

test("username input should change", () => {
  render(<SearchForm />);
  const usernameInputEl = screen.getByPlaceholderText(/Search/i)as HTMLInputElement;
  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});
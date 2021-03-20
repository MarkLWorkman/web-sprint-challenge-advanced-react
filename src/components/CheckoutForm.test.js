import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText("First Name:");
  userEvent.type(firstName, "Mark");

  const lastName = screen.getByLabelText("Last Name:");
  userEvent.type(lastName, "Workman");

  const address = screen.getByLabelText("Address:");
  userEvent.type(address, "9583 Kings Grant Road");

  const city = screen.getByLabelText("City:");
  userEvent.type(city, "Laurel");

  const state = screen.getByLabelText("State:");
  userEvent.type(state, "Maryland");

  const zip = screen.getByLabelText("Zip:");
  userEvent.type(zip, "20723");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const message = screen.queryByText(/you have ordered some plants! Woo-hoo!/i);
  expect(message).toBeInTheDocument();
});

import React from "react";

import { render, waitForElement, fireEvent } from "@testing-library/react";

import Login from "./Login";

describe("Tests for User Login component", () => {
  it("Should user login when form has been submitted", async () => {
    // render the component
    const { getByTestId, getByText } = render(<Login />);

    // search the user input
    const newUser = "testing";
    const fieldUserNode = await waitForElement(() =>
      getByTestId("form-field-user")
    );

    // search the user password
    const newPass = "testing";
    const fieldPassNode = await waitForElement(() =>
      getByTestId("form-field-pass")
    );

    // type in user input
    fireEvent.change(fieldUserNode, { target: { value: newUser } });
    expect(fieldUserNode.value).toEqual(newUser);

    // type in password input
    fireEvent.change(fieldPassNode, { target: { value: newPass } });
    expect(fieldPassNode.value).toEqual(newPass);

    // search the button
    const btnNode = await waitForElement(() => getByTestId("form-btn"));

    // click on button
    fireEvent.click(btnNode);

    // search the table
    const tdNode = await waitForElement(() => getByText(newUser));

    // check if the user has been included on the table
    expect(tdNode).toBeDefined();
  });
});

describe("Tests for User Login component: Errors onlyUser", () => {
  it("Should return error when form has been submitted", async () => {
    // render the component
    const { getByTestId } = render(<Login />);

    // search the user input
    const newUser = "testingError";
    const fieldUserNode = await waitForElement(() =>
      getByTestId("form-field-user")
    );

    // type in user input
    fireEvent.change(fieldUserNode, { target: { value: newUser } });
    expect(fieldUserNode.value).toEqual(newUser);

    // search the button
    const btnNode = await waitForElement(() => getByTestId("form-btn"));

    // click on button
    fireEvent.click(btnNode);

    // search the table
    const tdNode = "All fields is required";

    // check if the user has been included on the table
    expect(tdNode).toBeDefined();
  });
});

describe("Tests for User Login component: Errors onlyPassword", () => {
  it("Should return error when form has been submitted", async () => {
    // render the component
    const { getByTestId } = render(<Login />);

    // search the user input
    const newPass = "testingError";
    const fieldPassNode = await waitForElement(() =>
      getByTestId("form-field-pass")
    );

    // type in user input
    fireEvent.change(fieldPassNode, { target: { value: newPass } });
    expect(fieldPassNode.value).toEqual(newPass);

    // search the button
    const btnNode = await waitForElement(() => getByTestId("form-btn"));

    // click on button
    fireEvent.click(btnNode);

    // search the table
    const tdNode = "All fields is required";

    // check if the user has been included on the table
    expect(tdNode).toBeDefined();
  });
});
